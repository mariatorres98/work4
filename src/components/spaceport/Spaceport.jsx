import React from 'react'
import cohete from "../../asset/image-spaceport-portrait.jpg"
import '../technology/technology.scss'
import { useNavigate, Link } from 'react-router-dom'
const Spaceport = () => {
    const navigate = useNavigate();

    const getTechnology =()=>{
        navigate('/technology');
    }
    const getSpaceport =()=>{
        navigate('/spaceport');
    }
    const getSpacecapsule =()=>{
        navigate('/spacecapsule');
    }
  return (
    <>
      <main>
    <div class="tech__bg">
      <div class="container__img"></div>
    </div>

    <div class="tech">

      <div class="tech__top">
        <picture>
          
          <img src={cohete} alt="" className="cohete"/>
        </picture>

      </div>

      <div class="tech__bottom">

        <h2 className="titulo"><span aria-hidden="true">03 </span>space launch 101</h2>

        <ul class="page__links">
        <li><a class="dot active" onClick={getTechnology}>1</a></li>
          <li><a class="dot" onClick={getSpaceport}>2</a></li>
          <li><a class="dot" onClick={getSpacecapsule}>3</a></li>
        </ul>

        <div class="text__info">
          <h1><span>The terminology...</span>
            Launch vehicle</h1>

          <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
            payload from Earth's surface to space, usually to Earth orbit or beyond. Our
            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
            it's quite an awe-inspiring sight on the launch pad!
          </p>
        </div>
      </div>
    </div>
  </main>
    </>
  )
}
export default Spaceport;