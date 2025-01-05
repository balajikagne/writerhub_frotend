import React, { useState } from 'react';
import "./FormFillup.css";
import DiscordFileUploader from './DiscordFileUploader';

function FormFillup() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    address: '',
    numberOfAssignments: '',
    days: ''
  });
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileUploadStatus = (status) => {
    setIsFileUploaded(status);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFileUploaded) {
      alert("Please upload a file before submitting.");
      return;
    }
    console.log("Form Data:", formData); // Handle form data as needed
    window.location.href = "/payment";
  };

  return (
    <>
      <div className='Outer_Container_form'>
        <div className='Outer_Container_formup'>
          <h2 style={{ textAlign: "center" ,color:"white"}}> Assignment Details</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type='number'
              placeholder='Mobile Number'
              name='mobileNumber'
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            <textarea
              placeholder='Address'
              name='address'
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type='number'
              placeholder='Number of assignments'
              name='numberOfAssignments'
              value={formData.numberOfAssignments}
              onChange={handleChange}
            />
            <select
              name='days'
              value={formData.days}
              onChange={handleChange}
            >
              <option value="">-- Number Of Days --</option>
              <option value="Day 1">Day 1</option>
              <option value="Day 2">Day 2</option>
              <option value="Day 3">Day 3</option>
            </select>
            <DiscordFileUploader data={formData} setUploadStatus={handleFileUploadStatus} />
            <input type='submit' value='Submit' id='submit' />
          </form>
        </div>
      </div>
    </>
  );
}

export default FormFillup;
