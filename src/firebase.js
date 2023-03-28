import firebase from "./firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAQhPprqzx-SCwecIRz3Kr6xamy6jYNjFw",
  authDomain: "twitter-clone-9b4a3.firebaseapp.com",
  projectId: "twitter-clone-9b4a3",
  storageBucket: "twitter-clone-9b4a3.appspot.com",
  messagingSenderId: "888814136471",
  appId: "1:888814136471:web:946bceb56145af53ea4dd2",
  measurementId: "G-S3HWL6RJT4"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()

  export default db;
