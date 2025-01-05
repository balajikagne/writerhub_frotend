import React from 'react'
import IMG from '../assets/writer-hub.png'
import "./Footer.css"
function Footer() {
  return (
    <div className='outer_container12'>
        <div className='left_container12'>
            <div className='img_container12'>
                <img src={IMG} alt='' height={"100px"} width={"100px"}></img>
            </div>
            <div className='social_connection12'>
                <ul>
                    <li> <a className='btn_social' href='/'style={{fontSize:"1rem",textDecoration:"none"}}>Home</a></li>
                    <li><a  className='btn_social'href='/service'style={{fontSize:"1rem",textDecoration:"none"}}>Service</a></li>
                    <li><a  className='btn_social'href='/jobs'style={{fontSize:"1rem",textDecoration:"none"}}>Jobs</a></li>
                    <li><a  className='btn_social'href='/contact'style={{fontSize:"1rem",textDecoration:"none"}}>About</a></li>
                    <li><a  className='btn_social'href='/about'style={{fontSize:"1rem",textDecoration:"none"}}>Contact</a></li>
                </ul>
                <ul>
                    <li><a className="btn_social" href='/'><i class="fa-brands fa-linkedin" style={{fontSize:"1.5rem",fontWeight:"1rem",marginLeft:"-30px"}}></i></a></li>
                    <li><a className="btn_social" href='/service'><i class="fa-brands fa-instagram" style={{fontSize:"1.5rem",fontWeight:"1rem",marginLeft:"-30px"}}></i></a></li>
                    <li><a className="btn_social" href='/contact'><i class="fa-brands fa-whatsapp" style={{fontSize:"1.5rem",fontWeight:"1rem",marginLeft:"-30px"}}></i></a></li>
                    <li><a className="btn_social" href='/about'><i class="fa-brands fa-x" style={{fontSize:"1.5rem",fontWeight:"1rem",marginLeft:"-30px"}}></i></a></li>
                </ul>
            </div>
        </div>
        <div className='right_container'>At WRITERHUB, we connect you with the best professionals and service providers to make your projects and ideas come to life. Whether you're looking for experts in web development, graphic design, marketing, content creation, or any other service, our platform is designed to meet all your needs.

We offer a seamless, user-friendly experience where you can easily find and hire top-tier professionals for every stage of your project. With a focus on quality, reliability, and customer satisfaction, we ensure that each service provided is tailored to meet your specific goals and objectives.

Our platform empowers both service seekers and providers, creating a community where collaboration and innovation thrive. No matter the size of your project, we have the resources and expertise to help you succeed. Start your journey today with [Your Company Name] – the trusted platform for all your service needs.</div>
    </div>
  )
}

export default Footer
