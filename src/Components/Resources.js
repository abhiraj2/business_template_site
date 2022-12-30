import res1 from "../Assets/res1.png"
import res2 from "../Assets/res2.png"
import res3 from "../Assets/res3.png"

import "./Stylesheets/Resources.css"

let objArr = [
  {
    img: res1,
    title: "A high-converting, high-performing template",
    desc: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.",
    link: "/article/high-performing-template"
  },
  {
    img: res2,
    title: "With a clean, minimal and professional look",
    desc: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.",
    link: "/article/professional-look"
  },
  {
    img: res3,
    title: "Opus made our journey possible",
    desc: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.",
    link: "/article/insipirational-journey"
  },
]

function Item(props){
  return( 
    <div className="res_item">
      <img alt="item" src={props.img} className="res_img"></img>
      <div className="res_title">
        {props.title}
      </div>
      <div className="res_desc">
        {props.desc}
      </div>
      <a href={props.link} id="read_more_btn">Read More</a>
    </div>
  );
}

function Resources(){
  return(
    <div className="resources">
        <div className="titlegrp">
          <div className="title">
            Resources
          </div>
          <a id="started_btn" href="/started">Get Started</a>
        </div>
        <div className="items">
          {
            objArr.map((ele, idx)=> <Item img={ele.img} title={ele.title} desc={ele.desc} link={ele.link} key={idx}/>)
          }
        </div>
    </div>
  );
}

export default Resources