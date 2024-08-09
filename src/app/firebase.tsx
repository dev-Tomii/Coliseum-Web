// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJG8C1f4zYjioiUpOaU2VDaXpn29vnbYc",
    authDomain: "cdc-api-71df1.firebaseapp.com",
    databaseURL: "https://cdc-api-71df1-default-rtdb.firebaseio.com",
    projectId: "cdc-api-71df1",
    storageBucket: "cdc-api-71df1.appspot.com",
    messagingSenderId: "305669772151",
    appId: "1:305669772151:web:3c1f0c585f9e21d6bb8772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const playersRef = ref(db, 'api/players');
onValue(playersRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
})

