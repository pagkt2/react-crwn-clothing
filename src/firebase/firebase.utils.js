import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAPxvP133rXqsXayaDyZOC9MasX6LG1Epg",
    authDomain: "crwn-db-7e1d3.firebaseapp.com",
    databaseURL: "https://crwn-db-7e1d3.firebaseio.com",
    projectId: "crwn-db-7e1d3",
    storageBucket: "crwn-db-7e1d3.appspot.com",
    messagingSenderId: "1017766238337",
    appId: "1:1017766238337:web:a07b2a034170000f4cd580"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;