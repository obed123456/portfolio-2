import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import './App.css';
import Plus from'./plus.png';
import AboutIcon from './mail.png';
import LPage from './LandingPage';
import About from './About'; 
import Contact from './Contact';

class Fixed extends React.Component {
  render() {
    return(
      <HashRouter>
      <div className="mainPage">
        <div className="menu-aria">
          <div className="top"><NavLink to='/'><h1>Obed Samuel</h1></NavLink></div>
          <div className="bottom">
            <div className="aboutMe">
              <h4>Hello! <br/>I'm Obed designer and <br/>Front End Developer(student).<br/> I currently studies at KYH(Stockolm). <br/> I'm avaiable for internship from End of 2018. <br />
              </h4>
              
            </div>
            <div className="list">
              <ul className="liststyle">
                <li><NavLink to='/aboutme'><img className="aboutmeIcon" alt="about me"src={Plus}/></NavLink></li>
                <li className="contact"><NavLink to='/aboutme'>About Me</NavLink></li>
                <li><NavLink to='/contactme'><img className="contactIcon" alt="about me"src={AboutIcon}/></NavLink></li>
                <li className="contact"><NavLink to='/contactme'>Contact Me</NavLink></li>
              </ul>            
            </div>						
          </div>	
	  
        </div>
              <Route exact path="/" component={LPage}/>
              <Route path="/aboutme" component={About}/>
              <Route path="/contactme" component={Contact}/> 	
        </div>
      </HashRouter>
    );
  }
}

export default Fixed;