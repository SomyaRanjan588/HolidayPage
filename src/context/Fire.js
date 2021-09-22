import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAtHC2bEqzo8wpufX1hck3ym0Xyv9mSEMA",
  authDomain: "gif-auth.firebaseapp.com",
  projectId: "gif-auth",
  storageBucket: "gif-auth.appspot.com",
  messagingSenderId: "484840552037",
  appId: "1:484840552037:web:ac5ac8fe4bab2bdca3788c",
});
export const auth = app.auth();
export default app;
