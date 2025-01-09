import React from 'react'
import "./HomeScreen.css"
import service0 from "../assets/students-Photoroom.png"
import service from "../assets/content_c-Photoroom.png"
import service1 from "../assets/Designer-Photoroom.png"
import service2 from "../assets/Design-Photoroom.png"
import service3 from "../assets/project_c-Photoroom.png"
function HomeScreen() {
  return (
    <>
    <div className='outer_container_home'>
    <div className='section_con1'>
    <div className='content_left'>
        <div className='sec_1_text'>
            <h2>Get Your Writeup</h2>
            <h2>By Using Our Platform</h2>
            <h2>, Very Easy</h2>
        </div>
        <div className='list_sec_1'>
            <ul>
                <li>PDF, PPT, and Excel maker</li>
                <li>Assignment writers</li>
                <li>Free books</li>
                <li>Study materials like notes and previous year question papers.</li>
            </ul>
        </div>
        <div className='btn_sec_1'>
            <a href='/contactus'>
                <div className='btn_1'>Contact Us</div>
            </a>
            <a href='/service'>
                <div className='btn_2'>Get Services</div>
            </a>
        </div>
    </div>
    <div className="img_sec_right">
        <img src={service0} alt="Service Image" className="right_image"/>
    </div>
</div>



        {/* <div className='sectioin_con-1'>
        <div className='section_inner_1'>
          <div className='btn_container_sec1'>
           <img src={logo}></img>
            <a href=''><div className='btn_class'>Notes</div></a>
           </div>
           <div className='btn_container_sec1'>
           <img src={logo}></img>
            <a href=''><div className='btn_class'>Notes</div></a>
           </div>
           <div className='btn_container_sec1'>
           <img src={logo}></img>
            <a href=''><div className='btn_class'>Notes</div></a>
           </div>
           <div className='btn_container_sec1'>
           <img src={logo}></img>
            <a href=''><div className='btn_class'>Notes</div></a>
           </div>
          </div>
        </div> */}
        <div className='section_con2'>
          <div className='sec_2_text'>
            <h2>Content That Connects</h2>
            <p>We create content that makes a real impact. Whether it’s engaging blog posts, social media content, or videos, we ensure your message resonates with your audience and drives meaningful results.</p>
            <a href='/service' alt="" className='btn_services_on_home'>Service</a>
          </div>
          <div className='sec_2_img'>
            <img src={service} alt=''></img>
          </div>
        </div>
        <div className='section_con3'>
        <div className='sec_3_text'>
            <h2>WritingServices for Assignments & Documents</h2>
            <p>Need professional writing help? Whether it’s crafting well-researched assignments, creating polished essays, or drafting any type of document, I am here to assist. With years of experience in delivering quality written content, I offer tailored writing solutions to meet your academic or professional needs. From simple documents to complex reports, trust me to provide fast, reliable, and top-notch writing services to help you succeed. Let me take care of your writing tasks so you can focus on what matters most!</p>
            <a href='/service' alt="" className='btn_services_on_home'>Service</a>
          </div>
          <div className='sec_3_img'>
            <img src={service1} alt=''></img>
          </div>
        </div>
        <div className='section_con4'>
        <div className='sec_4_text'>
            <h2>MS Office Expert for Professional Document Creation</h2>
            <p>Unlock the power of expertly crafted documents with the help of a seasoned MS Office professional. Whether you need perfectly formatted reports, eye-catching presentations, or detailed spreadsheets, I’m here to provide top-notch services tailored to your needs. With years of experience in Word, Excel, PowerPoint, and more, I ensure your documents are clear, visually appealing, and polished to perfection. Let me help you save time and elevate your work with precision, creativity, and efficiency!</p>
            <a href='/service' alt="" className='btn_services_on_home'>Service</a>
          </div>
          <div className='sec_4_img'>
            <img src={service2} alt=''></img>
          </div>
        </div>
        <div className='section_con5'>
        <div className='sec_5_text'>
            <h2>Empowering Your Ideas with Expert Project Creation Services</h2>
            <p>we specialize in transforming your concepts into fully realized projects. Our team of experienced professionals provides tailored solutions for every stage of project creation, from inception to execution. Whether you're building a new website, launching an app, or developing a business plan, we are here to guide you through the entire process. With a focus on innovation, quality, and customer satisfaction, we ensure that every project we undertake meets your unique needs and exceeds your expectations. Let us help you bring your vision to life with precision, creativity, and expertise.</p>
            <a href='/service' alt="" className='btn_services_on_home'>Service</a>
          </div>
          <div className='sec_5_img'>
            <img src={service3} alt=''></img>
          </div>
        </div>
        
    </div>
    </>
  )
}

export default HomeScreen
