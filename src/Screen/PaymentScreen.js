import React from 'react'
import "./PaymentScreen.css"
import logo from "../assets/logo.jpg"
function PaymentScreen() {
  return (
    <>
      <div className='Outer_container_pay'>
          <div className='img_container_pay'>
            <img src={logo}></img>
          </div>
          <div className='payment_btn_pay'>
            <h2>-------   OR   -------</h2>
            <a href=''>Payment</a>
          </div>
      </div>
    </>
  )
}

export default PaymentScreen
