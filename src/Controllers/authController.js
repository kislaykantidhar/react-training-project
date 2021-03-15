import firebase from '../FireBase/firebaseInit';

export const signUpController =(email,password)=> new Promise((resolve,reject)=>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(userCredential=>{
        resolve(userCredential.user);
    })
    .catch(error=>{
        reject(error.message);
    })
})

export const signInController =(email,password)=> new Promise((resolve,reject)=>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(userCredential=>{
        resolve(userCredential.user);
    })
    .catch(error=>{
        reject(error.message);
    })
})

export const signOutController = () =>new Promise((resolve,reject)=>{
    firebase.auth().signOut()
    .then(()=>{
        resolve("signed out");
    })
    .catch(error=>{
        reject(error.message);
    })
})

export const getCurrentUser = () => firebase.auth().currentUser;