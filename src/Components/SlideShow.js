import nextslide from "../Assets/nextslide.png"
import previousslide from "../Assets/previousslide.png"
import woman3 from "../Assets/woman3.png"
import stampsLogo from "../Assets/stampsLogo.png"
import twoSqReturns from "../Assets/twoSqReturns.png"

import { useState } from "react";

import "./Stylesheets/SlideShow.css"

const objArr = [
  {
    feedback: "The Opus UI Kit lets you showcase your work in style. It's helped take our business online",
    name: "ALEXA F.",
    designation: "DESIGNER @STAMPS"
  },
  {
    feedback: "The Opus UI Kit lets you showcase your work in style.",
    name: "ABHIRAJ A.",
    designation: "DEVELOPER @STAMPS"
  }
]

function Item(props){
  let ele = objArr[props.num]
  return(
    <div className="slideItem">
      <div className="feedback">
        {ele.feedback}
      </div>
      <div className="secondHolder">
        <div className="name">
          {ele.name}
        </div>
        <div className="designation">
          {ele.designation}
        </div>
      </div>
    </div>
  );
}

function Slideshow(){
  const [slide, setSlide] = useState(0);
  let handleClickNext = ()=>{
    setSlide((prev)=>{
      return (prev+1)%(objArr.length)
    })
  }
  let handleClickPrev = ()=>{
    setSlide((prev)=>{
      if(prev === 0) return objArr.length-1;
      return (prev-1)%(objArr.length)
    })
  }
  return(
    <div className="slideshow">
      <div className="grp1">
        <div className="title">
          <img alt="stamp logo" src={stampsLogo}></img>
          <img alt="two squares" src={twoSqReturns}></img>
        </div>
        <Item num={slide}></Item>
        <div className="control">
          <img alt="prev Button" src={previousslide} onClick={handleClickPrev}></img>
          <img alt="next Button" src={nextslide} onClick={handleClickNext}></img>
        </div>
      </div>
      <div className="grp2">
        <img alt="" src={woman3}></img>
      </div>
    </div>
  )
}

export default Slideshow