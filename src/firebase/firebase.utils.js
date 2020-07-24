import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCj3eeGdTVXIE5fzohIcLzSn98mpTBz_Qg",
    authDomain: "crwn-db-ver1.firebaseapp.com",
    databaseURL: "https://crwn-db-ver1.firebaseio.com",
    projectId: "crwn-db-ver1",
    storageBucket: "crwn-db-ver1.appspot.com",
    messagingSenderId: "825292047589",
    appId: "1:825292047589:web:da232d3dd6cadc9a57000c",
    measurementId: "G-PTK6B9DV46"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account" 
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;