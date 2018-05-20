import React, { Component } from 'react';

class Project2 extends Component {
  render(){
    let border = {
      list:{
        border: '1px solid rgb(161, 156, 156)',
        width: '100%',
        textAlign: 'center'
      },
      center:{
        textAlign: 'center',
        width: '100%',
      }
    }
    let github ='http://github.com';
    return(
      <div>
        <h3>Project 1: Learning Managment System</h3> 
        <h4 style={{textAlign:'center', marginTop:'0.5em'}}>Technique used</h4>
        <ul className="flex">
          <li style={border.list}>HTML5</li>
          <li style={border.list}>CSS3</li>
          <li style={border.list}>JavaScript</li>
        </ul>
        <a target='_blank' href={github} style={border.center}>Github</a>
      </div>
    )
  }
}

export default Project2;