import { onAuthStateChanged, User } from 'firebase/auth'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { auth, db } from '../../firebase'

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return setCurrentUser(null)

      const usersCollectionRef = collection(db, 'users')

      const q = query(
        usersCollectionRef,
        where('email', '==', user.email || ''),
        limit(1)
      )

      getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setCurrentUser({
            ref: doc.ref,
            ...doc.data(),
          })
        })
      })
    })
  }, [])

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
}

export const UserContext = createContext<any>(null)
