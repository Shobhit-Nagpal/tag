import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import '../styles/Header.css';


const Menu = () => {
    return (<>
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/game"><h2>Play</h2></Link>
        <Link to="/leaderboard"><h2>Leaderboard</h2></Link>
    </>)
}

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="header">
            <h2 className="header-content">Tag Em!</h2>

            <div className="header-links">
                <Menu />
            </div>

            <div className="header_menu">
                {toggleMenu ? <CloseIcon style={{fill: "white"}} fontSize="large" onClick={() => setToggleMenu(false)} /> : <MenuIcon style={{fill: "white"}} fontSize="large" onClick={() => setToggleMenu(true)}/>}

                {toggleMenu && (
                    <div className="header_menu_container">
                        <Menu />
                    </div>
                )}
            </div>
        </div>
    )

}

export default Header;