import { useParams } from 'react-router'
import {
  doc,
  getDoc,
  setDoc,
  query,
  collection,
  where,
  getDocs,
  orderBy,
} from 'firebase/firestore'
import { db } from '../../firebase'
import { useForm } from 'react-hook-form'
import { useState, useEffect, useContext } from 'react'
import { Tweet } from '../components/Tweet'
import { v4 as uuid } from 'uuid'
import { UserContext } from '../contexts/UserProvider'

export default function DetailsTweet() {
  const [input, setInput] = useState('')
  const [tweet, setTweet] = useState<any>()
  const [comments, setComments] = useState<any[]>([])

  const tweetId = useParams().tweetId as string
  const currentUser = useContext(UserContext)

  const tweetRef = doc(db, 'tweets', tweetId)
  const commentsCollectionRef = collection(db, 'comments')

  useEffect(() => {
    getDoc(tweetRef).then((docSnap) => {
      const tweet = docSnap.data()
      setTweet(tweet as any)
    })

    const commentsQuery = query(commentsCollectionRef, where('tweetId', '==', tweetId))

    getDocs(commentsQuery).then((querySnapshot) => {
      const commentsArray: any[] = []

      querySnapshot.forEach((doc) => {
        commentsArray.push(doc.data())
      })

      setComments(commentsArray)
    })
  }, [])

  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    const comment = {
      author: currentUser.nickName || currentUser.email,
      photoURL: currentUser.photoURL,
      createdAt: new Date(),
      tweetId: tweetId,
      body: data.comment,
    }

    setDoc(doc(db, 'comments', uuid()), comment).then(() => console.log('comment added'))

    setComments((prev) => [comment, ...prev])
    setInput('')
  })

  return (
    <div className="space-y-8 w-[600px] flex flex-col">
      {tweet ? <Tweet tweet={{ ...tweet, id: tweetId }} isDetails /> : null}
      <div className="bg-white w-full rounded-lg flex flex-col gap-8 p-4">
        {currentUser ? (
          <div className="h-32">
            <textarea
              {...register('comment', {
                required: true,
                value: input,
                validate: (value) => value.trim().length > 0,
              })}
              onChange={(e: any) => setInput(e.target.value)}
              placeholder="Share your thoughts"
              maxLength={380}
              className="border-b-2 w-full border-slate-200 h-full focus:outline-none"
            />

            <div className="flex items-center gap-4 justify-end">
              <div>{input.length}/380</div>
              <button
                onClick={onSubmit}
                className="w-[80px] bg-blue-500 hover:bg-blue-700 hover:border-blue-700 text-sm text-slate-100 py-2 px-2 rounded-2xl font-bold"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        ) : null}

        <div className="text-3xl text-slate-500 mt-6">Comments</div>

        <div className="py-4">
          {comments.length ? (
            comments.map((comment, i) => (
              <div
                key={`${comment.author} ${i}`}
                className="flex items-start justify-start gap-4 border-b-2 border-b-slate-200 pb-10 pt-4"
              >
                <img
                  className="w-12 h-12 rounded-full bg-slate-200"
                  src={comment.photoURL}
                  alt="profile"
                />
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="font-bold">{comment.author}</div>
                    {comment.createdAt.seconds
                      ? new Date(comment.createdAt.seconds * 1000).toLocaleDateString()
                      : new Date(comment.createdAt).toLocaleDateString()}
                  </div>

                  <div className="break-all">{comment.body}</div>
                </div>

                <div className="flex flex-col justify-center"></div>
              </div>
            ))
          ) : (
            <div className="text-slate-500">This post has no comments</div>
          )}
        </div>
      </div>
    </div>
  )
}
