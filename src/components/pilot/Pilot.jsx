import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import comandante from '../../asset/image-victor-glover.png'

const Pilot = () => {
  const navigate = useNavigate();

  const getCrew =()=>{
    navigate('/crew');
}
const getMission =()=>{
    navigate('/mission');
}
const getFlight =()=>{
    navigate('/flight');
}
const getPilot =()=>{
    navigate('/pilot');
}
  return (
    <>
    <div class="crew__bg">
      <div class="container__img"></div>
    </div>

    <div class="crew">

      <h2><span aria-hidden="true">02 </span>meet the crew</h2>
      <div class="crew__top">

        <div class="crew__img">
          <img src={comandante} alt="NASA astronaut" className='img_comandante'/>
          <div class="line"></div>
        </div>
      </div>

      <div class="crew__bottom">
        <ul class="page__links">
          <li><a class="dot active" onClick={getCrew}></a></li>
          <li><a class="dot" onClick={getMission}></a></li>
          <li><a class="dot" onClick={getFlight}></a></li>
          <li><a class="dot" onClick={getPilot}></a></li>
        </ul>

        <div class="text__info">
          <h1><span aria-hidden="true">pilot</span>victor glover</h1>

          <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the
                        International Space Station. Glover is a commander in the U.S. Navy where
                        he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
                        station systems flight engineer.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
export default Pilot;