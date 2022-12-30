import logo from '../logo.svg';

import "./Stylesheets/NavBar.css"

function Navbar(){
    return (
      <div className='navbar'>
        <img alt="logo" id="logo" src={logo}/>
        <div className='navLink'>
            <a href="/overview">Overview </a>
            <a href="/pages">Pages </a>
            <a href="/template">Template</a>
        </div>
        <div className='contact'>
          <a id="contact_btn" href='/contact'>Contact Us</a>
        </div>
      </div>
    );
  }

export default Navbar