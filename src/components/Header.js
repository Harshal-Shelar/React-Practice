import React from 'react'
import logo from '../logo.svg';
const Header = () => {
  return (
    <div className='mainHeader'>
      <div>
        <img className='mainImage' src={logo} alt="" />
      </div>
      <div className='content'>
        <span>Hooks</span>
        <span>Hooks</span>
        <span>Hooks</span>
        <span>Hooks</span>
        <span>Hooks</span>
      </div>
    </div>
  )
}

export default Header
