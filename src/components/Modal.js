import React, { useState } from "react";
import '../styles/Modal.css';
import { addScores } from "../firebase/addScore";

const Modal = (props) => {

    const {setShowModal, totalTime} = props;
    
    const closeModal = () => {
        setShowModal(false);
    }

    const addData = () => {
        const username = document.getElementById('name').value;
        addScores(username, totalTime);
        closeModal();
    }


    return (
        <div className="modal">
            <h2>Game completed in {totalTime} seconds!</h2>
            <h3>Submit your name if you'd like</h3>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"></input>
            <div>
            <button onClick={() => addData()}>Submit</button>
            <button className="secondary-btn" onClick={() => closeModal()}>Cancel</button>
            </div>
        </div>
    )

}

export default Modal;