import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import { useContext, useEffect, useRef, useState } from 'react'
import { db } from '../../firebase'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserProvider'
import { useGetUser } from '../hooks/useGetUser'
import { IconContext } from 'react-icons'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Tweet } from '../components/Tweet'

export default function Tweets() {
  const [isAllTweets, setIsAllTweets] = useState(true)
  const [tweets, setTweets] = useState<any[]>([])
  const [loader, setLoader] = useState(true)

  const navigate = useNavigate()
  const currentUser = useContext(UserContext)
  const tweetsFilters = [where('deleted', '==', false)]
  !isAllTweets && tweetsFilters.push(where('author', '==', currentUser?.email))

  useEffect(() => {
    const tweetsRef = collection(db, 'tweets')
    const q = query(tweetsRef, ...tweetsFilters)

    getDocs(q)
      .then((querySnapshot) => {
        const docsArray: any[] = []

        querySnapshot.forEach((doc) => {
          docsArray.push({ ...doc.data(), id: doc.id })
        })

        setTweets(docsArray.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds))
        setLoader(false)
      })
      .catch((err) => console.log(err))
  }, [isAllTweets])

  if (loader)
    return (
      <div className="flex justify-center items-center pt-32 text-white">Loading...</div>
    )

  return (
    <div className="space-y-8 w-[640px] flex flex-col justify-center items-center">
      {currentUser ? (
        <div className="flex gap-4">
          <button
            onClick={() => setIsAllTweets(!isAllTweets)}
            className="transition ease-in-out delay-100 bg-indigo-600 hover:scale-110 duration-150 text-white text-lg rounded-lg p-3"
          >
            {isAllTweets ? 'My tweets' : 'All Tweets'}
          </button>
          <button
            onClick={() => navigate('/tweet/create')}
            className="transition ease-in-out delay-100 bg-indigo-600 hover:scale-110 duration-150 text-white text-lg rounded-lg p-3"
          >
            New Tweet
          </button>
        </div>
      ) : null}
      {tweets.length ? (
        tweets.map((tweet: any) => <Tweet key={tweet.body} tweet={tweet} />)
      ) : (
        <div className="flex justify-center items-center">
          <span className="text-white">No tweets</span>
        </div>
      )}
    </div>
  )
}
