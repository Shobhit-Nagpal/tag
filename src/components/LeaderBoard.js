import React, { useEffect, useState } from "react";
import {getScores} from "../firebase/getScores";
import '../styles/LeaderBoard.css';
import Header from "./Header";

const LeaderBoard = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {

        const fetchScores = async () => {
            setScores(await getScores());
        }
        
        fetchScores();
    }, []);


    return (<div>
                <Header />
                <div className="leaderboard">
                    <table>
                        <tbody>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Time</th>
                            </tr>

                            {scores.map((score, index) => {
                                return(
                                <tr key={score.id}>
                                    <td >{index+1}</td>
                                    <td>{score.data.username}</td>
                                    <td>{score.data.time} sec</td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>)
}

export default LeaderBoard;