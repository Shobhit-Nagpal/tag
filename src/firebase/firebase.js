import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCnkNr3-hPJi6340pvHmiM5BBtN0NTp7rQ",
  authDomain: "tag-em-109d2.firebaseapp.com",
  projectId: "tag-em-109d2",
  storageBucket: "tag-em-109d2.appspot.com",
  messagingSenderId: "751232281840",
  appId: "1:751232281840:web:fc53f3db096ad23b26e635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};
export default app;