import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCoZCySdkSkWmpblwlX6gyjzgAK7mBnysY",
    authDomain: "eventmanagement-b27a2.firebaseapp.com",
    projectId: "eventmanagement-b27a2",
    storageBucket: "eventmanagement-b27a2.appspot.com",
    messagingSenderId: "80285399485",
    appId: "1:80285399485:web:ab101d628437d0d9cefad4",
    measurementId: "G-SHNP39TV63"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);