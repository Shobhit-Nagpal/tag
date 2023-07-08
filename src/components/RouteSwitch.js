import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import LeaderBoard from "./LeaderBoard";

const RouteSwitch = () => {
    return (
      <>
      <HashRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/game" element={<Game/>}/>
            <Route path="/leaderboard" element={<LeaderBoard/>}/>
        </Routes>
      </HashRouter>
      </>
    );
  }
  
  export default RouteSwitch;