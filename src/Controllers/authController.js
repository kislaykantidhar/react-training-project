import firebase from '../FireBase/firebaseInit';

export const signUpController =async (email,password) =>{
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email,password);
        return userCredential.user;
    } catch (error) {
        return error;
    }   
}

export const signInController = async (email,password) =>{
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email,password);
        return userCredential.user;
    } catch (error) {
        return error;
    }
}

export const signOutController = async () =>{
    try {
        const signOutSuccess = await firebase.auth().signOut();
        return signOutSuccess;
    } catch (error) {
        return error;
    }
}