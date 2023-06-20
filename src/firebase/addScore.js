import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const addScores = async (username, time) => {

    console.log(username);
    
    try {
        const docRef = await addDoc(collection(db, "scores"), {
            username: username,
            time: time
        });
    
        console.log(`Document added, id: ${docRef.id}`);
    }
    catch (e) {
        console.log(e);
    }
}

export {addScores};