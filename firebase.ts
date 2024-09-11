import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB9Brk_sYHAxrghsZ-A3QVtaDH18Qgn3LU",
  authDomain: "e-commerse-d8fde.firebaseapp.com",
  projectId: "e-commerse-d8fde",
  storageBucket: "e-commerse-d8fde.appspot.com",
  messagingSenderId: "594124904579",
  appId: "1:594124904579:web:c48552bc1e3b7db902e3b6",
  measurementId: "G-PBT2HP2V3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export default app