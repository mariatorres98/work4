import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Destination from "../components/destination/Destination";
import Crew from "../components/crew/Crew";

import Technology from "../components/technology/Technology";
import Navar from "../components/navar/Navar";
import Planet from "../components/planet-destination/Planet";
import Mission from "../components/planet-crew/Mission";
import Launch from "../components/planet-technology/Launch";

const Router = () => {
  const destination = [
    { name: "Moon" },
    { name: "Mars" },
    { name: "Europa" },
    { name: "Titan" },
  ];
  const integrantes=[
     {name:'Commander'},{name:'Mission'},{name:'Pilot'},{name:'Flight'}
  ]
  const space=[
    {name:'Launch'},{name:'Spaceport'},{name:'Capsule'}
 ]
  return (
    <BrowserRouter>
    
      <Routes>
        <Route element={<Navar />}>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />}>

            <Route
              path=":planetName"
              element={<Planet destination={destination} />}
            />
          </Route>
          <Route path="crew" element={<Crew />} >
          <Route
              path=":missionName"
              element={<Mission integrantes={integrantes} />}
            />
          </Route>
          <Route path="technology" element={<Technology />} >
          <Route
              path=":launchName"
              element={<Launch space={space} />}
            />
          </Route>

        </Route>
        {/* <Route path="/" element={<Home />} />


                <Route path="crew" element={<Crew />} />
                <Route path="boton1" element={<Boton1 />} />
                <Route path="specialits" element={<Specialits />} />

                <Route path="technology" element={<Technology />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
