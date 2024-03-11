import { FaSignsPost } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact(){
return(
    <div>
<h1 className="contact-me-h1">Contact Me</h1>
<div className="contact-icons-container">
    <div className="adress-div">
    <FaSignsPost className="contact-post"/>
    <h3 className="contact-address">ADDRESS</h3>
    <p>Dessie wollo Ethiopia</p>
    </div>
  <div>
  <FaPhone className="contact-Phone"/>
  <h3 className="contact-contact">CONTACT NUMBER</h3>
    <p>+251988283088</p>
  </div>
  <div>
  < HiOutlineMail className="contact-email"/>
  <h3 className="email-h3">EMAIL ADDRESS</h3>
    <p className="email-p">kalkidansolomon1616@gmail.com</p>
  </div>
  <div className="linked-div">
  <FaLinkedin className="contact-linked"/>
  <h3 className="contact-contact">LINKEDIN</h3>
    <p>kalkidan solomon</p>
  </div>

  </div>
    
 </div>

)
}
export default Contact