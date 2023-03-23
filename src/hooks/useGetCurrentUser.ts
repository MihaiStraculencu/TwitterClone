import cookie from "cookiejs";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";

export const useGetCurrentUser = (): any => {
  const [user, setUser] = useState<any>();
  const userEmail = cookie.get("user") as string;

  if (!userEmail) {
    auth.signOut();
    return null;
  }

  useEffect(() => {
    const usersCollectionRef = collection(db, "users");
    const q = query(usersCollectionRef, where("email", "==", userEmail));

    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    });
  }, []);

  return user;
};
