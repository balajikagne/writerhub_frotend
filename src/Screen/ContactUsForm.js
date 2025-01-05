import React, { useState } from 'react';
import './ContactUsForm.css';
import axios from 'axios';
import Swal from 'sweetalert2';
function ContactUsForm() {
  const WEBHOOK_URL = "https://discord.com/api/webhooks/1304747804266074213/KWjbcuUeA-jiaCFEuHdvj0Wtfq_RJjxq6wBYnXiSk7Ggckv5-lnc6nAqDqvwkJKw9l57";
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    mobile: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[789][0-9]{9}$/;
    return mobileRegex.test(mobile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;

    // Validate email
    if (!validateEmail(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address'
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: ''
      }));
    }

    // Validate mobile number
    if (!validateMobile(formData.mobile)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: 'Please enter a valid Indian mobile number (10 digits starting with 7, 8, or 9)'
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: ''
      }));
    }

    if (valid) {
      setIsSubmitting(true);
      try {
        const payload = {
          content: `**New Contact Form Submission**\n\n**Name**: ${formData.name}\n**Email**: ${formData.email}\n**Mobile**: ${formData.mobile}\n**Message**: ${formData.message}`
        };

        await axios.post(WEBHOOK_URL, payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        Swal.fire({
          title: 'Thank You!',
          text: 'Thank you for reaching out! We will get back to you soon.',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          // Redirect to the home page
          window.location.href = '/';
        });
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send your message. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Your mobile number"
            required
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            required
          />
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default ContactUsForm;
