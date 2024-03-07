import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { v4 } from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyBXKkKtfuCFsMHV876tQ9f-VAF19HOHxrk",
  authDomain: "contrateme-img.firebaseapp.com",
  projectId: "contrateme-img",
  storageBucket: "contrateme-img.appspot.com",
  messagingSenderId: "236688352984",
  appId: "1:236688352984:web:3532eae6e7cf43fe2ed9ad"
};

const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app)

  export async function uploadFile(file) {
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
  }