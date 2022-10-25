import React from 'react'
import { Outlet } from 'react-router-dom';
import comandante from '../../asset/douglas.png'
import { useNavigate, Link } from 'react-router-dom'

import '../crew/crew.scss'
const Crew = () => {
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
          <h1><span aria-hidden="true">Commander</span>Douglas Hurley</h1>

          <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
            and former NASA astronaut. He launched into space for the third time as
            commander of Crew Dragon Demo-2.
          </p>
        </div>
      </div>
    </div>
    </>
    
  )
}
export default Crew;