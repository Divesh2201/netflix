import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAjZISx53iyvgm3_3OPOhwHG3yoUTEMQHg",
  authDomain: "netflix-e20b5.firebaseapp.com",
  projectId: "netflix-e20b5",
  storageBucket: "netflix-e20b5.appspot.com",
  messagingSenderId: "919601483839",
  appId: "1:919601483839:web:5d54914de905d79169288a"
};
const firebase = Firebase.initializeApp(config);

export { firebase }; 