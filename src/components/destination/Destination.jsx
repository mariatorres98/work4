import React from "react";
import { Outlet } from "react-router-dom";
import "../destination/destination.scss";
import moonImg from "../../asset/image-moon.png";
import marsImg from "../../asset/image-mars.png";
import europaImg from "../../asset/image-europa.png";
import titanImg from "../../asset/image-titan.png";
import { useNavigate, Link } from 'react-router-dom'


const img =[europaImg, titanImg]
const Destination = () => {
  const navigate = useNavigate();
  const destinationContent = [
    {
      name: "MOON",
      image: moonImg,
      inf: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400",
      time: "3",
    },
    {
      name: "MOON",
      image: marsImg,
      inf: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400",
      time: "3",
    },
    {
      name: "MOON",
      image: europaImg,
      inf: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400",
      time: "3",
    },
    {
      name: "MOON",
      image: titanImg,
      inf: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400",
      time: "3",
    },
  ];
 

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
      {/* <div>
        {destinationContent.map(
          (item, index) => (
            (<img key={index} src={moonImg} alt=""></img>),
            (<p key={index}> {item.inf}</p>)
          )
        )}
      </div>
      <div>
      {
        img.map((element,index)=>{
          return(
            
            <div key={index}><img src={element}  alt="" /></div>
          )
        })
      
      }
      </div> */}
      <Outlet />
      
      <div class="destination__bg">
            <div class="container__img"></div>

            <div class="destination">
                <div class="destination__top">
                    <h4><span aria-hidden="true">01</span> pick your destination</h4>
                    <div class="destination__place">
                        <img src={moonImg} alt=""/>
                    </div> 
                </div>

                <div class="destination__bottom">
                    <ul class="page__links">
                        <li><a class="navbar__link active__link" onClick={getMoon}>moon</a></li>
                        <li><a class="navbar__link" onClick={getMars}>mars</a></li>
                        <li><a class="navbar__link" onClick={getEuropa}>europa</a></li>
                        <li><a class="navbar__link" onClick={getTitan} >titan</a></li>
                    </ul>

                    <div class="text__info">
                        <h1>moon</h1>
                        <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain
                            perspective and come back refreshed. While you’re there, take in some history by visiting
                            the Luna 2 and Apollo 11 landing sites.
                        </p>
                        <div class="line"></div>

                        <div class="travel-info">
                            <h2><span>avg distance</span>384,400 km</h2>
                            <h3><span>est. travel time</span>3 days</h3>
                        </div>
                    </div>
                </div>
            </div>
            </div>

    </>
  );
};
export default Destination;
