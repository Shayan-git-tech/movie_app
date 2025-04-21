import React from 'react'
import hero from '../assets/Images/hero.png' 
import Search from './Search'

function Header() {
  return (
    <div className="wrapper">
      <header>
        <img src={hero} alt="Hero Banner"/>
        <h1>Find <span className="text-gradient">Movie</span>You'll Enjoy Without the Hassle</h1>
      </header>
      <Search />
    </div>
  )
}

export default Header
