import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import marsImg from "../../asset/image-mars.png";

const Mars = () => {
    const navigate = useNavigate();
    const getMars =()=>{
        navigate('/mars');
    }
    const getMoon =()=>{
        navigate('/destination');
    }
    const getEuropa =()=>{
        navigate('/europa');
    }
    const getTitan =()=>{
        navigate('/titan');
    }
  return (
    <>

      <div class="destination__bg">
            <div class="container__img"></div>

            <div class="destination">
                <div class="destination__top">
                    <h4><span aria-hidden="true">01</span> pick your destination</h4>
                    <div class="destination__place">
                        <img src={marsImg} alt=""/>
                    </div> 
                </div>

                <div class="destination__bottom">
                    <ul class="page__links">
                        <li><a class="navbar__link active__link" onClick={getMoon}>moon</a></li>
                        <li><a class="navbar__link" onClick={getMars}>mars</a></li>
                        <li><a class="navbar__link" onClick={getEuropa}>europa</a></li>
                        <li><a class="navbar__link" onClick={getTitan}>titan</a></li>
                    </ul>

                    <div class="text__info">
                        <h1>mars</h1>
                        <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
                            the tallest planetary mountain in our solar system. It’s two and a half times
                            the size of Everest!
                        </p>
                        <div class="line"></div>

                        <div class="travel-info">
                            <h2><span>avg distance</span>225 mil. km</h2>
                            <h3><span>est. travel time</span>9 months</h3>
                        </div>
                    </div>
                </div>
            </div>
            </div>

    </>
  )
}
export default Mars;