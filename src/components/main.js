import React from "react";

import "./main.css";
import icon_1 from "../util/icon_1.png";
import image_2 from "../util/image_2.png";
import icon_2 from "../util/icon_2.svg";
import icon_3 from "../util/icon_3.png";
import image_3 from "../util/Challenges.png";
import image_4 from "../util/image_4.png";
import icon_4 from "../util/icon_4.png";
import icon_5 from "../util/icon_5.png";
import image_5 from "../util/image_5.png";
import image_6 from "../util/image_6.png";
import icon_6 from "../util/icon_6.png";
import image_7 from "../util/image_7.png";

export default function Main() {
  return (
    <section className="main">
      <h1 className="quote">
        <i>Come with us and achieve the target of net zero carbon emission </i>
      </h1>
      <h3>BUY AND SELL CREDITS</h3>
      <img src={icon_1} className="icon_1" alt="icon" />

      <div className="row1">
        <div className="first-para">
          <span>
            Carbon credits are certificates for offsetting one ton of carbon
            dioxide emissions .
          </span>
          <button>BUY CREDITS</button>
          <img
            src={image_2}
            alt="carbon-credit-cycle"
            height="320px"
            width="470px"
          />
          <h2 className="head1">
            Challenges of Traditional Carbon Credit Systems
          </h2>
        </div>

        <div className="right-para">
          <img src={icon_2} alt="icon_2" height="500px" width="500px" />
        </div>
      </div>
      <img
        src={icon_3}
        className="icon_3"
        alt="icon_3"
        height="550px"
        width="280px"
      />
      <img src={image_3} alt="Challenges" className="Challenges" />
      <div className="line"></div>

      <div className="row2">
        <img src={image_4} alt="graph" height="400px" width="600px" />
        <img src={icon_4} alt="icon_4" height="40px" />
        <div className="para2">
          <span className="head2">Carbon Footprint over the Years</span>
          <p>
            Carbon footprint has surged due to industrialization, amplifying the
            urgency for sustainable practices to curb greenhouse gas emissions
            and combat climate change
          </p>
        </div>
      </div>
      <div className="row3">
        <img
          src={image_5}
          alt="additional-image"
          height="1000px"
          width="1200px"
        />
      </div>
      <div className="row4">
        <div className="text-content">
          <div className="icon-heading">
            <img src={icon_6} alt="icon_6" height="40px" />
            <span className="head2">
              Get Green NFTs as certificate for burning Carbon Credits
            </span>
          </div>
          <div className="para2">
            <p>
              Green NFTs represent digital assets that prioritize sustainability
              and eco-conscious practices, aiming to reduce the carbon footprint
              associated with blockchain transaction
            </p>
          </div>
        </div>
        <div className="image-content">
          <img src={image_6} alt="nft" height="300px" width="400px" />
        </div>
      </div>

      <div className="row5">
        <p>
          
          <h2>Carbon Credit Prices in different Countries</h2>
        </p>
      </div>

      <div className="row6">
        <img src={image_7} alt="nft" height="500px" />
      </div>

      <img src={icon_5} alt="icon" height="50px" />
    </section>
  );
}
