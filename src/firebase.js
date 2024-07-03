// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeFirestore, CACHE_SIZE_UNLIMITED, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// const firebaseConfig = {
//   apiKey: "AIzaSyAeH6TNeWR1-ySfqoG91egbghudMlZyDOQ",
//   authDomain: "recuitz.firebaseapp.com",
//   projectId: "recuitz",
//   storageBucket: "recuitz.appspot.com",
//   messagingSenderId: "686399885441",
//   appId: "1:686399885441:web:6447865adf9516010a3d80",
//   measurementId: "G-42KBZ11E5W"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCa6A2Rb76vLjHyZTXctlrFTFxypgT8srM",
  authDomain: "fwallet-bf64d.firebaseapp.com",
  projectId: "fwallet-bf64d",
  storageBucket: "fwallet-bf64d.appspot.com",
  messagingSenderId: "146299339395",
  appId: "1:146299339395:web:22aa6642a49f9190d951b6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//const db = getFirestore(app);

// const db = initializeFirestore(app, {
//     cacheSizeBytes: CACHE_SIZE_UNLIMITED,
//   });

const db = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager(),
      settings: {
        cacheSizeBytes: CACHE_SIZE_UNLIMITED,
      },
    }),
  });


  const auth = getAuth(app);
  const storage = getStorage(app);

  export {auth, db, storage};