import React, { Component } from 'react'
import PageLayout from '../Components/PageLayout';

export default class About extends Component {
  render() {
    return (
      <PageLayout background="#2c3e50">
        <div className='wrapper'>
          <h1>About Us</h1>
          <p>FanBoost is a place for creators to share their content with the world.</p>
        </div>
      </PageLayout>
    )
  }
}

