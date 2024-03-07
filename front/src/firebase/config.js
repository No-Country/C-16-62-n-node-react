import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes} from 'firebase/storage'
import { v4 } from 'uuid'

const firebaseConfig = {
    apiKey: "AIzaSyDftsKDlDi4C45T0YMUdFrWS-Y_0YJQ0P0",
    authDomain: "servicios-online-8cc8b.firebaseapp.com",
    projectId: "servicios-online-8cc8b",
    storageBucket: "servicios-online-8cc8b.appspot.com",
    messagingSenderId: "615877549414",
    appId: "1:615877549414:web:6827ddc3aa8f59585c7ca7"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app)

  export async function uploadFile(file) {
    const storageRef = ref(storage, v4())
    return await uploadBytes(storageRef, file)
  }