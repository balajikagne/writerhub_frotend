import React from 'react';

const SecureProcess = () => {
  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <a
        href="https://payments.cashfree.com/forms/writerhub"
        target="_parent"
        style={{
          border: '1px solid black',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          width: 'fit-content',
          margin: '0 auto',
          background: '#000',
          textDecoration: 'none',
          color: '#fff',
        }}
      >
        <img
          src="https://cashfree-checkoutcartimages-prod.cashfree.com/writer-huba7u5gfj27pmg_prod.png"
          alt="logo"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'Arial', fontSize: '14px', marginBottom: '5px' }}>
            Pay Now
          </div>
          <div
            style={{
              fontFamily: 'Arial',
              fontSize: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ marginRight: '5px' }}>Powered By Cashfree</span>
            <img
              src="https://cashfreelogo.cashfree.com/cashfreepayments/logosvgs/Group_4355.svg"
              alt="Cashfree Logo"
              style={{
                width: '16px',
                height: '16px',
              }}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default SecureProcess;
