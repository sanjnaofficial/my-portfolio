import React from 'react'
import "./navbar.scss"
import { SocialIcon } from 'react-social-icons'

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Sanjna</span>
        <div className="social">
          <SocialIcon url='https://www.linkedin.com/in/sanjna-sharma-1702bts/'/>
          <SocialIcon url='https://github.com/sanjnaofficial'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar