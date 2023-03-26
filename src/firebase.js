// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, collection } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCnwHWF84BhoKcmbXIku34yBMzs5Q3DuEI",
  authDomain: "art-for-good-cause.firebaseapp.com",
  databaseURL: "https://art-for-good-cause-default-rtdb.firebaseio.com",
  projectId: "art-for-good-cause",
  storageBucket: "art-for-good-cause.appspot.com",
  messagingSenderId: "10395956348",
  appId: "1:10395956348:web:7df5d632b703397bea45f9",
  experiments: {
    topLevelAwait: true,
  }

};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

//export const querySnapshot = await getDocs(collection(db, "users"));

export default app;
