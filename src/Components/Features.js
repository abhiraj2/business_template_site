
import woman from "../Assets/woman.png"
import lg_smallbox from "../Assets/lg_smallbox.svg"
import tick from "../Assets/tickMark.svg"

import "./Stylesheets/Features.css"

function Features(){
  return(
    <div className="features">
      <div className="grp1">
        <div id="item1">
          <div><img alt="light_grey_box" src={lg_smallbox}></img></div>
          <div className="text">Features</div>
        </div>
        <div className="title" id="item2">
          You're not just doing business. You're doing life.
        </div>
        <div id="item3">
          <div className="item3item"><span className="ticksvg"><img alt="tick" src={tick}></img></span><div>Responsive Components</div></div>
          <div className="item3item"><span className="ticksvg"><img alt="tick" src={tick}></img></span> <div>Over 50 Sections</div></div>
          <div className="item3item"><span className="ticksvg"><img alt="tick" src={tick}></img></span> <div>Handcrafted Pages</div></div>
        </div>
      </div>
      <div className="grp2">
        <img alt="woman" src={woman}></img>
      </div>
    </div>
  );
}

export default Features