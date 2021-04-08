import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
const config = {
  apiKey: 'AIzaSyCzLhLdgB-rr8vC6kmTDuMxkk7HlxVspLw',
  authDomain: 'geekfleet-dcce9.firebaseapp.com',
  databaseURL: 'https://geekfleet-dcce9-default-rtdb.firebaseio.com',
  projectId: 'geekfleet-dcce9',
  storageBucket: 'geekfleet-dcce9.appspot.com',
  messagingSenderId: '1029322291439',
  appId: '1:1029322291439:web:744d22dd88ebeb51afc31a',
  measurementId: 'G-J908B2H1GW'
}
const firebaseapp = firebase.initializeApp(config)
const auth = firebase.auth()
const db = firebase.firestore()
export default { auth, db }
