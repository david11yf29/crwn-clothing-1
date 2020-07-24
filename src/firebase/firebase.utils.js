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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }

        return userRef;
    }

    console.log(snapShot);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account" 
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;