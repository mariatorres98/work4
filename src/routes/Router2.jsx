import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Destination from "../components/destination/Destination";
import Crew from "../components/crew/Crew";
import Technology from "../components/technology/Technology";
import Navar from "../components/navar/Navar";
import Mars from "../components/mars/Mars";
import Europa from "../components/europa/Europa";
import Titan from "../components/titan/Titan";
import Mission from "../components/mission/Mission";
import Pilot from "../components/pilot/Pilot";
import Flight from "../components/flight/Flight";
import Spacecapsule from "../components/spacecapsule/Spacecapsule";
import Spaceport from "../components/spaceport/Spaceport";


const Router2 = () => {
  
  return (
    <BrowserRouter>
    <Navar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
        <Route path="mars" element={<Mars />} />
        <Route path="europa" element={<Europa />} />
        <Route path="titan" element={<Titan />} />
        <Route path="mission" element={<Mission />} />
        <Route path="pilot" element={<Pilot />} />
        <Route path="flight" element={<Flight/>} />
        <Route path="spacecapsule" element={<Spacecapsule/>} />
        <Route path="spaceport" element={<Spaceport/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router2;
