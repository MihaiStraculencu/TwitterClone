import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { auth, db } from '../../firebase'

export const useGetUser = (email: string | null | undefined): any => {
  const [user, setUser] = useState<any>()

  useEffect(() => {
    const usersCollectionRef = collection(db, 'users')
    const q = query(usersCollectionRef, where('email', '==', email || ''), limit(1))

    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })
    })
  }, [])

  return user
}
