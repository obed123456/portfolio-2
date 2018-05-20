import React, { Component } from 'react';
import GBook from './GuestBook';
import Messages from './GuestBookMessages';

class About extends Component {
  render() {
    return(
      <div className="main">        
        <div className="mainSec" style={{textAlign: 'center', alignItems:'center', alignSelf: 'center'}}>
        <h3 style={{width: '100%', textAlign: 'center', alignItems:'center', alignSelf: 'center'}}>Guest Book</h3>
        <div  style = {{width: '100%', height: '100%', left: '100%',alignItems:'center', alignSelf: 'center'}}> 
          <GBook />
          <Messages />
        </div>
        </div>
        
      </div>
    )
  }
}

export default About; 