import React from "react";
import '../home/home.scss';
import logo from '../../asset/logo.svg'



const Home = () => {
 
  return (
    <>
      <body class="loading">
        
        <main>

          <div class="hero-container">
            <div class="hero-img"> </div>

            <div class="space">
              <div class="space-desc">
                <span>so, you want to travel to</span>
                <h1>space</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
                  hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
                  this
                  world experience!
                </p>
              </div>

              <a class="large-btn" href="">explore</a>
            </div>

          </div>

        </main>

      </body>
    </>
  );
};

export default Home;
