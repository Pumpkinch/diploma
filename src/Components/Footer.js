import React from 'react'
import logo from '../images/rocket.svg'
import '../styles/components/footer.css'

export default function Footer() {
  return (
    <footer>
      <div className='logo'>
        <img src={logo} alt="logo" />
        Fan<span>Boost</span>
      </div>
      {/* Все права защищены &copy; */}
    </footer>
  )
}
