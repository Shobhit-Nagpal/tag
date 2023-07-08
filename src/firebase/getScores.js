import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase.js";

const getScores = async () => {

    try {
        const scores = collection(db, "scores");
        const q = query(scores, orderBy('time'));
        const querySnapshot= await getDocs(q);

        const allScores = [];

        querySnapshot.forEach((doc) => {
            allScores.push(doc.data());
        });

        return allScores;
    }
    catch (e) {
        console.error(e);
    }

}

export {getScores};