import React from 'react'
import comandante from '../../asset/image-anousheh-ansari.png'
import { useNavigate, Link } from 'react-router-dom'
const Flight = () => {
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
          <h1><span aria-hidden="true">Flight Engineer</span> Anousheh Ansari</h1>

          <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                        Ansari was the fourth self-funded space tourist, the first self-funded woman to
                        fly to the ISS, and the first Iranian in space.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
export default Flight;