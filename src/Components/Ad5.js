import woman2 from "../Assets/woman2.png"

import "./Stylesheets/Ad5.css"

function Advertisement5(){
  return(
    <div className="ad5">
      <div className="grp1">
        <img alt="woman" src={woman2}></img>
      </div>
      <div className="grp2">
        <div className="smoltitle">OUR KNOWLEDGE</div>
        <div className="title"> 
          A UI Kit that's Modern & Elegant
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.
        </div>
      </div>
    </div>
  );
}

export default Advertisement5