import l from '../Assets/l.svg'
import man from '../Assets/man.png'
import apostrophe from '../Assets/apostrophe.svg'
import twoSq from '../Assets/two_squares.svg'
import oneSqDB from '../Assets/one_square_darkb.svg'
import bg1 from '../Assets/bg1.svg'
import bigBlueBox from '../Assets/bigBoxBlue.svg'
import scrollIco from '../Assets/mouseIco.svg'
import listico1 from '../Assets/ListIco/1.svg'
import listico2 from '../Assets/ListIco/2.svg'
import listico3 from '../Assets/ListIco/3.svg'
import listico4 from '../Assets/ListIco/4.svg'


import "./Stylesheets/Main_Attraction.css"

const items = [listico1, listico2, listico3, listico4]

const titleSize = '48px'
const subtitleSize = '20px'


function MainAttraction(){
  return(
    <div className='mainAttr'>
      <div className='con'>
        <div className='text_content'>
          <div className='title' style={{fontSize: titleSize}}> Built for enterprise <img alt='' height={48} src={l}></img> businesses.</div>
          <div className='subtitle' style={{fontSize: subtitleSize}}>Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.</div>
          <div className='buttons'>
            <a id="learn_btn" href='/learn'>Learn More  {'->'}</a>
            <a id="explore_btn" href='/explore'>Explore Pages</a>
          </div>
        </div>
        <div>
          <img alt="" id="oneSqDB" src={oneSqDB}></img>
          <img alt="man" src={man} height={512}></img>
          <div className='ceo_quote'>
            <div className='text'>I felt like I couldn't grow until I moved to Opus. Now I am encouraged to sell more with them.</div>
            <div className='credits'>
              <div className='text'>
                <div className='name'>Frank Dublin</div>
                <div className='desgination' style={{color: "#67718E"}}>CEO <span className="company" style={{color:"#1355FF"}}>@STAMPS</span></div>
              </div>
              <div className='text'>
                <img alt="" src={apostrophe}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='con-background'>
        <img alt="" src={twoSq}></img>
        <div className='bgImg'>
          <div className='bgColorDiv'>
            <img alt="" id="bg1" src={bg1}></img>
          </div>
          <div className='bg2div'> <img alt="" id="bg2" src={bigBlueBox}></img></div>
        </div>
        <div className='scrollInfo'>
          <div className="text" style={{color:"#B6BCCE"}}>
            <span><img alt="scroll icon" src={scrollIco}></img></span> <span>SCROLL FOR MORE</span>
          </div>
          <div id="blankSpace1"> 
          </div>
        </div>
      </div>
      <div className='second_item'>
        <div className='title' style={{fontSize:40}}>
          Trusted and loved by the world's best teams
        </div>
        <div className='team_list'>
          {items.map((ele, idx) => <img alt="team" key={idx} src={ele}></img>)}
        </div>
      </div>
    </div>
  );
}

export default MainAttraction