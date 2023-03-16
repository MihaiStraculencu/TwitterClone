import cookie from 'cookiejs'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { auth, db } from '../../firebase'

export const useGetUser = (email: string): any => {
  const [user, setUser] = useState<any>()

  useEffect(() => {
    const usersCollectionRef = collection(db, 'users')
    const q = query(usersCollectionRef, where('email', '==', email))

    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })
    })
  }, [])

  return user
}
