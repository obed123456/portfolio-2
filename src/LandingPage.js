import React from 'react';
import Main from './Main';
import './App.css';
import Project1 from './Components/Project1';
import Project2 from './Components/Project2';
import Project3 from './Components/Project3';
// import Rating from './Rating';

import Linkedin from './linkedin.png';
import GitHub from './github.png';

class LPage extends React.Component {
  render() {
    
		let skills = {
			center:{
				textAlign: 'center',			
      }		
    }
	  let img = {
			textAlign: 'center',
			height: '50px'
		}
		let flexCenter = {
		display:'flex',
		justifyContent: 'center',
		alignItems: 'center', 
		height:'100%'
		}
		let flexColumn = {
			flexWrap: 'wrap',
			height:'100%', 
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
    }
    return(
      <div className="main">
          <ul className="mainSec">
            <li className="sm"><Main/><div className="overlay">Weather Report</div></li>
            <li className="sm">
              <ul style={flexColumn}>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>NODE js</li>
                <li>GIT</li>
                <li>SASS</li>
              </ul>
              <div className="overlay">Front End Skills</div>
            </li>
            <li className="sm"><div style={skills.center}>Poject 1 <br/> ithub</div><div className="overlay">Project 1</div></li>
            <li className="sm"><div style={skills.center}>Project 1 <br/> Github</div><div className="overlay">Project 2</div></li>
            <li className="sm"><div style={skills.center}>Project 1 <br/> Github</div><div className="overlay">Project 3</div></li>
            <li className="sm"><div style={skills.center}>Project 1 <br/> Github</div><div className="overlay">Project 4</div></li>
            <li className="sm">
              <div style={flexCenter}>
                <img alt="github-logo" style={img} src={GitHub}/>
              </div>
              <div className="overlay">Git Repository</div>
            </li>
            <li className="sm">
              <div style={flexCenter}>
              <img alt="logo-linkedin" style={img} src={Linkedin}/>
              </div>
              <div className="overlay">Linkedin</div>
            </li>
            <li className="sm sm-noScale flex-center">	
              							
                            
            </li>
          </ul>	
        </div>

    )
  }
}

export default LPage;