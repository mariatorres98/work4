import React from 'react'
import { Outlet } from 'react-router-dom';
import logo from '../../asset/logo.svg'
import '../navar/navar.scss'

import { useNavigate, Link } from 'react-router-dom'


 const Navar = () => {
  const navigate = useNavigate();
  const home =()=>{
    navigate('/');
  }
  const destino =()=>{
    navigate('/destination');
  }
  const crew =()=>{
    navigate('/crew');
  }
  const technology =()=>{
    navigate('/technology');
  }
  return (
    <>
    
    <div class="hero-container">
            <div class="hero-img"> </div>

          </div>
    <section id="header">
          <div class="header">
            <div class="nav-bar">
              <div class="brand">
                <a ><img src={logo} alt="Space tourism logo" /></a>
              </div>

              <div class="nav-line"></div>

              <div class="nav-list">
                <div class="hamburger">
                  <div class="bar"></div>
                </div>
                <ul id="nav__list">
                  <li><a class="navbar__link" onClick={home} ><span>00</span> home</a></li>
                  <li><a class="navbar__link" onClick={destino} ><span>01</span> destination</a></li>
                  <li><a class="navbar__link" onClick={crew} ><span>02</span> crew</a></li>
                  <li><a class="navbar__link" onClick={technology}> <span>03</span> technology</a></li>
                </ul>
              </div>
            </div>
          </div>

        </section>
      <div>
        <Outlet/>
    </div>
    </>
  
  )
}
export default Navar;