import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB1mV8CCvV0iJkSF0hKpVJ2JW0oUlZzHcc",
    authDomain: "eyam-52b45.firebaseapp.com",
    projectId: "eyam-52b45",
    storageBucket: "eyam-52b45.appspot.com",
    messagingSenderId: "68750327780",
    appId: "1:68750327780:web:95594f483d41efb7e751f1",
    measurementId: "G-8EDN7KH4NT"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 * @param  {string} materias
 */
 export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
  }