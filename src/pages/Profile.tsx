import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useEffect, useState } from 'react'
import { useGetCurrentUser } from '../hooks/useGetCurrentUser'
import Cropper from 'react-easy-crop'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, storage } from '../../firebase'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'
import cookie from 'cookiejs'

export const Profile = () => {
  const navigate = useNavigate()
  const [userRef, setUserRef] = useState<any>()
  const userEmail = cookie.get('user')
  const user = useGetCurrentUser()

  useEffect(() => {
    !userEmail && navigate('/')
  }, [userEmail])

  if (!userEmail) navigate('/login')

  const [uploadedFile, setUploadedFile] = useState<File | null>()

  useEffect(() => {
    const usersCollectionRef = collection(db, 'users')
    const q = query(usersCollectionRef, where('email', '==', userEmail))

    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((docRef) => {
        setUserRef(doc(db, 'users', docRef.id))
      })
    })
  }, [])

  const { register, handleSubmit } = useForm()

  const uploadNewAvatarImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUploadedFile(event.target.files[0])
    }
  }

  const handleUploadClick = () => {
    if (!uploadedFile) {
      return
    }

    const profilePictureRef = ref(storage, `${userEmail}-profile.jpg`)

    uploadBytes(profilePictureRef, uploadedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        updateDoc(userRef, {
          profilePicture: url,
        })
          .then(() => {
            console.log('updated profile pic successfully')
            window.location.reload()
          })
          .catch((error) => {
            console.log("couldn't update profile pic", error)
          })
      })
    })
  }

  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <div className="bg-white text-black  h-[400px] w-[520px] p-10 rounded-xl justify-center hover:bg-gray-100 transition duration-200 border border-gray-300">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col h-14">
            <div className="flex items-center space-x-4">
              <img
                src={
                  user?.profilePicture
                    ? user?.profilePicture
                    : 'images/placeholder-avatar.jpeg'
                }
                alt="avatar"
                className="inline-block h-12 w-12 rounded-full object-cover transition duration-100 hover:grayscale-[50%]"
              />

              <input className="w-[55%]" type="file" onChange={uploadNewAvatarImage} />

              {uploadedFile ? (
                <button
                  className="p-2 bg-blue-500 text-white rounded"
                  onClick={handleUploadClick}
                >
                  Change Avatar
                </button>
              ) : null}
            </div>
          </div>

          <form
            onSubmit={handleSubmit((data) => {
              updateDoc(userRef, {
                firstName: data.firstName,
                lastName: data.lastName,
              })
                .then(() => {
                  console.log('updated profile pic successfully')
                  window.location.reload()
                })
                .catch((error) => {
                  console.log("couldn't update profile pic", error)
                })
            })}
            className="flex flex-col space-y-4"
          >
            <input
              {...register('firstName', {
                required: true,
                value: user?.firstName,
              })}
              type="text"
              name="firstName"
              defaultValue={user?.firstName}
              placeholder="First name"
              className="h-10 focus:outline-none border-b-2 bg-transparent"
            />
            <input
              {...register('lastName', {
                required: true,
                value: user?.lastName,
              })}
              type="text"
              name="lastName"
              defaultValue={user?.lastName}
              placeholder="Last name"
              className="h-10 focus:outline-none border-b-2 bg-transparent"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
