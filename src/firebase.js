import { initializeApp } from "firebase/app";


//TODO не видит данные из .env.local
console.log(process.env);
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_AUTH_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_AUTH_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_AUTH_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_AUTH_MESSAGING_APP_ID,
  apiKey: 'AIzaSyCLyqrqwwEdFGjfaqOas6DhvmyJx0h5PY4',
  authDomain: 'centisounds-27f42.firebaseapp.com',
  projectId: 'centisounds-27f42',
  storageBucket: 'centisounds-27f42.appspot.com',
  messagingSenderId: '163468364592',
  appId: '1:163468364592:web:b3a0650054f8a9f4ba96f5'
};


const app = initializeApp(firebaseConfig);