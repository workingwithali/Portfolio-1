import "./header.css"
import CTA from './CTA'
import me from "../../assets/me.png"
import HeaderSocials from "./HeaderSocials"
const Header = () => {
  return (

    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ali Rashid</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <div className="dis">
          <HeaderSocials/>
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      
        </div>
        

      </div>
    </header>

  )
}

export default Header
