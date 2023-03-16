import { doc, setDoc } from 'firebase/firestore'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { db } from '../../firebase'
import { useGetCurrentUser } from '../hooks/useGetCurrentUser'

const CreateTweet = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const user = useGetCurrentUser()

  const onSubmit: SubmitHandler<Input> = (data) => {
    setDoc(doc(db, 'tweets', uuid()), {
      createdAt: new Date(),
      body: data.body,
      author: user.email,
      deleted: false,
    })
      .then(() => navigate(`/`))
      .catch((err) => console.log(`tweet creation failed with error: ${err}`))
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>()

  return (
    <div className="flex justify-center pt-20">
      <div className="bg-white text-black text-2xl h-[400px] w-[520px] flex rounded-xl justify-center border">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col px-8 space-y-2"
        >
          <div className="flex flex-col items-end border-b border-blue-200 py-6 px-2 space-y-2">
            <textarea
              {...register('body', { required: true })}
              onChange={(e: any) => setInput(e.target.value)}
              maxLength={380}
              className="h-[250px] appearance-none bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none text-lg verflow-y-scroll no-scrollbar resize-none"
              placeholder="What's happening?"
            />
          </div>

          <div className="text-gray-600 text-lg text-end flex justify-between">
            <div>
              {errors.body && (
                <span className=" ease-out transition duration-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col space-y-4 justify-end">
              <div>{input.length}/380</div>
              <button
                className="w-[80px] bg-blue-500 hover:bg-blue-700 hover:border-blue-700 text-sm text-slate-100 py-2 px-2 rounded-2xl font-bold"
                type="submit"
              >
                Tweet
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

type Input = { body: string }

export default CreateTweet
