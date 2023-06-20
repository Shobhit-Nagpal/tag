import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';
import Header from "./Header";
import spiderManImage from '../images/spider-man-miles-morales-artwork-3840x2160-4813.jpg';

const Home = () => {

    return (
      <>
      <Header/>
      <div className="home">
        <div>
            <img className="home-img" src={spiderManImage} alt="Spider-Man Miles Morales"/>
        </div>
        <div className="tagline">
        <h1 className="tagline-primary">Tag, <span className="tagline-secondary"><p>your favorite characters.</p></span></h1>
        <Link to="/game">
            <button>Start game</button>
        </Link>
        </div>
      </div>
      </>
    );
  }
  
  export default Home;