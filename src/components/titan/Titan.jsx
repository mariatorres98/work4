import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import titanImg from "../../asset/image-titan.png";
 const Titan = () => {
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
                      <img src={titanImg} alt=""/>
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
                      <h1>titan</h1>
                      <p>The only moon known to have a dense atmosphere other than Earth, Titan
                            is a home away from home (just a few hundred degrees colder!). As a
                            bonus, you get striking views of the Rings of Saturn.
                      </p>
                      <div class="line"></div>

                      <div class="travel-info">
                          <h2><span>avg distance</span>1.6 bil. km</h2>
                          <h3><span>est. travel time</span>7 years</h3>
                      </div>
                  </div>
              </div>
          </div>
          </div>

  </>
  )
}
export default Titan;