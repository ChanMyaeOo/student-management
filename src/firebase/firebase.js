import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD4WnV5utyjQqEg1O1efgI8VWOE2LT51Rc",
  authDomain: "landing-page-d5993.firebaseapp.com",
  databaseURL: "https://landing-page-d5993.firebaseio.com",
  projectId: "landing-page-d5993",
  storageBucket: "landing-page-d5993.appspot.com",
  messagingSenderId: "606218054779",
  appId: "1:606218054779:web:765ea102bea90aacba06de"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };