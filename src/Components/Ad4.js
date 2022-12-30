import galleryIco from "../Assets/galleryIco.png"
import telegramIco from "../Assets/telegramIco.png"

import "./Stylesheets/Ad4.css"

function Advertisement4(){
  return(
    <div className="ad4">
      <div className="grp1">
        <div className="text1"> 
          <img alt="telegram icon" src={telegramIco}></img>
          <div className="text">
            <div className="title">
              Choose your sections
            </div>
            <div className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </div>
          </div>

        </div>
        <div className="text2"> 
          <img alt="gallery icon" src={galleryIco}></img>
          <div className="text">
            <div className="title">
              Add the images and text you need
            </div>
            <div className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </div>
          </div>

        </div>
      </div>
      <div className="grp2">
        <div className="title">Create pages using beautiful components.</div>
        <div className="subtitlegrp">
          <div className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </div>
          <a id="learn_btn_diff" href="/learn">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default Advertisement4