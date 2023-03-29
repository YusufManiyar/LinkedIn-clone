import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCwCyttUXn-GhICzHmtifBlcbhZd9h6CuI",
    authDomain: "linkedin-clone-5bae6.firebaseapp.com",
    projectId: "linkedin-clone-5bae6",
    storageBucket: "linkedin-clone-5bae6.appspot.com",
    messagingSenderId: "1098737361552",
    appId: "1:1098737361552:web:90f0749e63b4daf1e36e15",
    measurementId: "G-ELPM1M6QCE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db =  firebaseApp.firestore()
  const auth = new firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()

  export{
    auth, provider, storage
  }
  export default db