import firebase from "firebase/app"; //pulling firebase utility library that belongs at firebase/app
import "firebase/firestore"; //imported database library
import "firebase/auth"; //imported authentication library
//we need to import firebase because firestore and auth will be availiable to us then
const firebaseConfig = {
  apiKey: "AIzaSyCeQTX9Sfrqpr2RAUx0hof4KyUAN20nve0",
  authDomain: "pro-organizer-app-8f3bf.firebaseapp.com",
  databaseURL: "https://pro-organizer-app-8f3bf.firebaseio.com",
  projectId: "pro-organizer-app-8f3bf",
  storageBucket: "pro-organizer-app-8f3bf.appspot.com",
  messagingSenderId: "1039328418565",
  appId: "1:1039328418565:web:b4af8688df40514931756c",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //gives acces to google authentication from auth library
//it takes some custom parameter
provider.setCustomParameters({ prompt: "select_account" }); //to popup google signin page for authentication
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
