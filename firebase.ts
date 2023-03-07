// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyA8cgbI5FoDjavQGrlYkgTVDbmYi3-ow3w",
  authDomain: "twitterclone-f0512.firebaseapp.com",
  projectId: "twitterclone-f0512",
  storageBucket: "twitterclone-f0512.appspot.com",
  messagingSenderId: "61945640457",
  appId: "1:61945640457:web:080468b6385d9c7590aad8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
