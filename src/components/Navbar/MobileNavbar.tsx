import { useContext, useEffect, useRef, useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { useNavigate } from 'react-router'

import { About, Home, Login, Logout, NewTweet, Profile, Signup } from './components'
import { UserContext } from '../../contexts/UserProvider'
import { useGetUser } from '../../hooks/useGetUser'

export default function MobileNavbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const currentUser = useContext(UserContext)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <div
      ref={ref}
      className="md:hidden flex flex-col w-[50%] justify-center relative pb-20"
    >
      <div className="fixed flex justify-end top-0 w-full z-50 bg-indigo-700 p-4">
        <div className="w-full flex justify-center text-3xl font-medium text-white pl-8">
          <button onClick={() => navigate('/')}>TwittClone</button>
        </div>
        <button onClick={() => setOpen(!open)}>
          <BiDotsVerticalRounded color="white" size={35} />
        </button>
      </div>

      {open ? (
        <div className="flex fixed flex-col items-center right-0 sm:w-[35%] rounded-b-md shadow-lg top-[67px] bg-indigo-600 space-y-5 z-50 p-4">
          <Home />
          <NewTweet user={currentUser} />
          <About />
          <Profile user={currentUser} />
          <Login user={currentUser} />
          <Logout user={currentUser} />
          {currentUser && currentUser.isAdmin ? <Signup user={currentUser} /> : null}
        </div>
      ) : null}
    </div>
  )
}
