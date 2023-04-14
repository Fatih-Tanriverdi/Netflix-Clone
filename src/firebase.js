import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyC8q6QilCSFG1t_Z0saEAv_iIl9DM4ruBo",
  authDomain: "netflix-react-replica.firebaseapp.com",
  projectId: "netflix-react-replica",
  storageBucket: "netflix-react-replica.appspot.com",
  messagingSenderId: "650112334743",
  appId: "1:650112334743:web:802394e0a5a7c9f7d362d2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
