import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' })

export const handleUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const { uid } = userAuth;
    const userRef = fireStore.doc(`users/${uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const timestamp = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createDate: timestamp,
                ...additionalData
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    return userRef;
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    })
}