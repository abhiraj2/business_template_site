import Navbar from "./Components/NavBar";
import MainAttraction from "./Components/Main_Attraction"
import ShowOff from "./Components/Showoff"
import Advertisement2 from "./Components/Ad2"
import Advertisement3 from "./Components/Ad3";
import Advertisement4 from "./Components/Ad4";
import Features from "./Components/Features";
import Advertisement5 from "./Components/Ad5";
import Slideshow from "./Components/SlideShow";
import Resources from "./Components/Resources"


import './App.css';

let over_items = [
  {name: "Overview", link: "/overview"},
  {name: "Landings", link: "/landings"},
  {name: "Company", link: "/company"},
  {name: "Pricing", link: "/pricing"},
  {name: "CMS Pages", link: "/cms_pages"},
  {name: "Accounts", link: "/accounts"},
  {name: "Buy for Figma", link: "/buy"},
]

let page_items = [
  {name: "Landings 1", link: "/landings1"},
  {name: "Landings 2", link: "/landings2"},
  {name: "Company 1", link: "/company1"},
  {name: "Company 2", link: "/comapny2"},
  {name: "Blog 1 ", link: "/blog1"},
  {name: "Blog 2", link: "/blog2"},
  {name: "Contact", link: "/contact"},
]

function Footer(){
  return(
    <div className="footer">
      <div className="overviewgrp">
        <div className="o_title">OVERVIEW</div>
        <div className="o_items">
          {
            over_items.map((ele, idx)=><a key={idx} href={ele.link}>{ele.name}</a>)
          }
        </div>
      </div>
      <div className="pagegrp">
        <div className="p_title">PAGES</div>
        <div className="p_items">
          {
            page_items.map((ele, idx)=><a key={idx} href={ele.link}>{ele.name}</a>)
          }
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainAttraction/>
      <ShowOff/>
      <Advertisement2/>
      <Advertisement3/>
      <Advertisement4/>
      <Features/>
      <Advertisement5/>
      <Slideshow/>
      <Resources/>
      <Footer/>
      <div className="last_item">
        <a href="/style">Styleguide</a>
        <a href="/style">License</a>
        <a href="/style">Changelog</a>
        <div className="copyright">
          © Template by <span id="lorem">Lorem </span>- Powered by <span id="ipsum">Ipsum</span>
        </div>
      </div>
    </div>
  );
}

export default App;
