import { useForm } from 'react-hook-form'
import { auth, db } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useGetCurrentUser } from '../hooks/useGetCurrentUser'
import { useEffect, useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'

export const Signup = () => {
  const navigate = useNavigate()
  const [signUpError, setSignUpError] = useState<string | null>(null)
  const user = useGetCurrentUser()

  useEffect(() => {
    if (user) navigate('/')
  }, [user])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <div className="bg-white text-black  min-h-[380px] w-[560px]  rounded-xl justify-center hover:bg-gray-100 transition duration-200 border border-gray-300 pb-10">
        <form
          className="flex flex-col space-y-8 w-full h-full p-6 pb-0 text-gray-700"
          // Normally, the passwords would be hashed server side. Never store passwords in plain text.
          onSubmit={handleSubmit((data) => {
            createUserWithEmailAndPassword(auth, data.email, data.password)
              .then(() => {
                console.log('user created')
              })
              .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                setSignUpError(error.code)
                console.log(errorCode, errorMessage)
              })

            setDoc(doc(db, 'users', uuid()), {
              createdAt: new Date(),
              email: data.email,
            })
              .then(() => {
                navigate('/login')
                console.log('userinfo created')
              })
              .catch((err) => console.log(`tweet creation failed with error: ${err}`))
          })}
        >
          <div className="text-lg">Sign up</div>
          <div className="flex flex-col">
            <input
              {...register('email', { required: true, minLength: 6 })}
              type="email"
              name="email"
              placeholder="Email"
              className="h-10 focus:outline-none border-b-2 bg-transparent"
            />

            {errors.email?.type === 'required' && (
              <span className="text-red-600 text-sm">Email is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              {...register('password', { required: true, minLength: 6 })}
              type="password"
              name="password"
              placeholder="Password"
              className="h-10 focus:outline-none border-b-2 bg-transparent"
            />

            {errors.password?.type === 'minLength' && (
              <span className="text-red-600 text-sm">
                Minimum password length is 6 digits
              </span>
            )}
            {errors.password?.type === 'required' && (
              <span className="text-red-600 text-sm">Password is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              {...register('confirmPassword', {
                required: true,
                minLength: 6,
                maxLength: 20,
                validate: (value) => {
                  if (watch('password') != value) {
                    return 'Your passwords do no match'
                  }
                },
              })}
              type="password"
              name="confirmPassword"
              placeholder="Re-type Password"
              className="h-10 focus:outline-none border-b-2 bg-transparent"
            />

            {errors.confirmPassword?.type === 'minLength' && (
              <span className="text-red-600 text-sm">
                Minimum password length is 6 digits
              </span>
            )}
            {errors.confirmPassword?.type === 'required' && (
              <span className="text-red-600 text-sm">Password is required</span>
            )}
            {errors.confirmPassword?.type === 'validate' && (
              <span className="text-red-600 text-sm">Passwords don't match</span>
            )}
          </div>

          <button type="submit" className="h-10 bg-blue-500 text-white rounded">
            Signup
          </button>
          {signUpError && <span className="text-red-600 text-sm">{signUpError}</span>}
        </form>
      </div>
    </div>
  )
}
