// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBXA0X8zp3XCdurRZaVHXWtETVCYt71nSw',
  authDomain: "netflix-237d6.firebaseapp.com",
  projectId: "netflix-237d6",
  storageBucket: "netflix-237d6.appspot.com",
  messagingSenderId: "927493638189",
  appId: "1:927493638189:web:d452465ca7313bedf8d0a4",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }