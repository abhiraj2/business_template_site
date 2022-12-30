import img1 from "../Assets/ad3_1.png"
import img2 from "../Assets/ad3_2.png"
import img3 from "../Assets/ad3_3.png"

import lb_smallbox from "../Assets/lb_smallbox.png"
//import db_smallbox from "../Assets/db_smallbox.png"

import "./Stylesheets/Ad3.css"

let obj = [
  {
    img: img1,
    title: "Project Management",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat."
  },
  {
    img: img2,
    title: "Advanced Analytics",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat."
  },
  {
    img: img3,
    title: "Marketing & Dashboard",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat."
  },
]

function Item(props){
  return(
    <div className="item">
      <img alt="" src={props.img}></img>
      <div className="title">{props.title}</div>
      <div className="desc">{props.desc}</div>
    </div>
  );
}

function Advertisement3(){
  return(
    <div className="box">
      <div className="ad3">
        <div className="intro">
          <div className="title"> Ways to work with us</div>
          <a href="/started" id="started_btn">Get Started</a>
        </div>
        <div className="con">
          {obj.map((ele, idx)=>
            <Item key={idx} img={ele.img} title={ele.title} desc={ele.desc}></Item>
          )}
        </div>
      </div>
      <div className="bg1">
        <img alt="background" src={lb_smallbox}></img>
      </div>
    </div>
  );
}

export default Advertisement3