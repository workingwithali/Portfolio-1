import React from 'react'
import "./header.css"
import CTA from './CTA'
const Header = () => {
  return (
    <div>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Ali Rashid</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA/>

        </div>
      </header>
    </div>
  )
}

export default Header
