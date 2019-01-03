import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='lander'>
          <h1>AWScratch</h1>
          <p>A simple note taking app on AWS</p>
        </div>
      </div>
    );
  }
}
