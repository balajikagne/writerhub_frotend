import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PreviewScreen.css';
import logo from '../assets/logo.jpg';

function PreviewScreen() {
  const location = useLocation();
  const navigate = useNavigate();

  // Access the subject data passed through navigation state
  const subject = location.state?.subject;
  useEffect(()=>{
    if (location.state?.subject==="")
    {
      navigate("universities")
    }
  },[])
  console.log(subject)
  return (
    <>
      <div className='Outer_container_p'>
        <h2>Preview</h2>
        <div className='preview_scroll'>
            <img src={subject.image}></img>
            <img src={subject.image}></img>
            <img src={subject.image}></img>
        </div>
        <div className='preview_description'>
               <h2>{subject.name}</h2>
               <p>{subject.dsc}</p>
        </div>
        <div className='preview_btn'>
            <a href='/payment' className='buy_btn'>Buy Now</a>
        </div>
      </div>
    </>
  )
}

export default PreviewScreen
