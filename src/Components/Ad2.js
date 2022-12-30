import lg_smallbox from "../Assets/lg_smallbox.svg"
import bg from "../Assets/ad2_bg.svg"
import mouseIco from "../Assets/mouseIco2.svg"
import creativityIco from "../Assets/creativityIco.svg"

import "./Stylesheets/Ad2.css"

function Advertisement2(){
  return(
    <div className="ad2">
      <div className="textcontainer">
        <img alt="smallbox_grey" src={lg_smallbox}></img>
        <div className="title">Make your site <br></br> better with Opus</div>
        <div className="subcon">
          <div className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</div>
          
          <a id="learn_btn" href="/learn">Learn More</a>
        </div>
      </div>
      <div className="textcontainer" id="containsbg">
        <div className="bg">
          <img alt="" src={bg}></img>
        </div>
        <div className="textgrp">
          <div className="text">
            <div>
              <img alt="Mouse Icon"src={mouseIco}></img>
            </div>
            <div className="subtext">
              Build or Customize a Website in Minutes
            </div>
          </div>
          <div className="text">
            <div>
              <img alt="Creativity Icon" src={creativityIco}></img>
            </div>
            <div className="subtext">
              Our UI Kit was made for creativity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertisement2