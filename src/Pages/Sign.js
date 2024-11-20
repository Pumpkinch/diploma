import React, { Component } from 'react'
// import Authorization from '../Components/Authorization'
import Login from '../Components/Login'
import StarryBackground from '../Components/StarryBackground'



export default class Sign extends Component {
  render() {
    return (
      <div>
        <div className="stars-background">
          <StarryBackground />
        </div>
        <div className='login-page'>
          <Login />
        </div>
      </div>
    )
  }
}
