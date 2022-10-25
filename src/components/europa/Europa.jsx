import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import europaImg from "../../asset/image-europa.png";
 const Europa = () => {
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
                      <img src={europaImg} alt=""/>
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
                      <h1>europa</h1>
                      <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a
                            winter lover’s dream. With an icy surface, it’s perfect for a bit of
                            ice skating, curling, hockey, or simple relaxation in your snug
                            wintery cabin.
                      </p>
                      <div class="line"></div>

                      <div class="travel-info">
                          <h2><span>avg distance</span>628 mil. km</h2>
                          <h3><span>est. travel time</span>3 years</h3>
                      </div>
                  </div>
              </div>
          </div>
          </div>

  </>
  )
}
export default Europa;