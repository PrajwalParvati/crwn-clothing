import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config={
        apiKey: "AIzaSyADj7Oo7JDpCBnp8P6vQWFYp2qrmk4BK2U",
        authDomain: "crwn-db-9c6e1.firebaseapp.com",
        projectId: "crwn-db-9c6e1",
        storageBucket: "crwn-db-9c6e1.appspot.com",
        messagingSenderId: "524928714114",
        appId: "1:524928714114:web:9f43c6cbbd51f58f913b9b",
        measurementId: "G-8E875R5PHS"
}
firebase.initializeApp(config)
export const auth=firebase.auth()
export const firestore =firebase.firestore()

const provider=new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>{
    auth.signInWithPopup(provider)
}
export default firebase