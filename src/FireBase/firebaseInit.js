import config from './config';
import firebase from 'firebase'
require('firebase/auth')

firebase.initializeApp(config);
export default firebase;