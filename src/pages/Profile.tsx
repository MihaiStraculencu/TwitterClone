import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useContext, useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../firebase'
import { UserContext } from '../contexts/UserProvider'
import { updateProfile } from 'firebase/auth'
import { updateDoc } from 'firebase/firestore'

export const Profile = () => {
  const navigate = useNavigate()
  const currentUser = useContext(UserContext)

  if (!currentUser) navigate('/login')

  const [uploadedFile, setUploadedFile] = useState<File | null>()

  const { register, handleSubmit } = useForm()

  const uploadNewAvatarImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUploadedFile(event.target.files[0])
    }
  }

  const handleOnSubmit = handleSubmit((data) => {
    console.log('currentUser.ref', currentUser.ref)
    updateDoc(currentUser.ref, {
      nickname: data.nickname,
    })
      .then(() => {
        console.log('updated profile nickname successfully')
        window.location.reload()
      })
      .catch((error) => {
        console.log("couldn't update profile nickname", error)
      })

    updateProfile(currentUser, {
      displayName: data.nickname,
    })
  })

  const handleUploadClick = () => {
    if (!uploadedFile) {
      return
    }

    const profilePictureRef = ref(storage, `${currentUser.email}-profile.jpg`)

    uploadBytes(profilePictureRef, uploadedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        updateDoc(currentUser.ref, {
          photoURL: url,
        })
          .then(() => {
            console.log('updated profile pic successfully')
            window.location.reload()
          })
          .catch((error) => {
            console.log("couldn't update profile pic", error)
          })

        updateProfile(currentUser, {
          photoURL: url,
        })
      })
    })
  }

  return (
    <div className="w-[500px] flex flex-col justify-center items-center">
      <div className="min-h-[300px] justify-center px-10 border rounded-2xl bg-white flex flex-col w-full">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col h-14">
            <div className="flex items-center space-x-4">
              <img
                src={
                  currentUser?.photoURL
                    ? currentUser?.photoURL
                    : 'images/placeholder-avatar.jpeg'
                }
                alt="avatar"
                className="inline-block h-12 w-12 rounded-full object-cover"
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

          <form onSubmit={handleOnSubmit} className="flex flex-col space-y-4">
            <input
              {...register('nickname', {
                required: true,
                value: currentUser?.nickname,
              })}
              defaultValue={currentUser?.nickname}
              type="text"
              placeholder="Nickname"
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
