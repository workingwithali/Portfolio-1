import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com/workingwithali" target='_blank'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/workingwithali/" target='_blank'><FaLinkedin /></a>
        <a href="https://www.youtube.com/@workingwithali" target='_blank'><FaYoutube /></a>
       
    </div>
  )
}

export default HeaderSocials
