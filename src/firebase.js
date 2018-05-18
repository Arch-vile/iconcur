import firebase from 'firebase/app';
import 'firebase/database';

// Initalize and export Firebase.
const config = {
    apiKey: "AIzaSyCSBNe66HYkUe7DOETjMEyQwcR24qKR0Yc",
    authDomain: "iconcur-8a7f9.firebaseapp.com",
    databaseURL: "https://iconcur-8a7f9.firebaseio.com",
    projectId: "iconcur-8a7f9",
    storageBucket: "iconcur-8a7f9.appspot.com",
    messagingSenderId: "135581222114"
};

export default firebase.initializeApp(config);