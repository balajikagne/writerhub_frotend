import React, { useState } from 'react';
import Swal from 'sweetalert2';
import thumbnail from "../assets/workshop_thumbnail.jpg"
const SeminarRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    college: '',
    year: '',
    department: '',
    question: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://sheetdb.io/api/v1/dvn4mo6mp5ld0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Form Submitted!',
          text: 'Your response has been recorded.',
        }).then(()=>{
            window.location.href="/"
        });
        setFormData({
          name: '',
          mobile: '',
          email: '',
          college: '',
          year: '',
          department: '',
          question: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'There was an error submitting your form. Please try again.',
      });
    }
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px'
    },
    thumbnail: {
      maxWidth: '100%',
      borderRadius: '10px'
    },
    formGroup: {
      marginBottom: '15px'
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold'
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px'
    },
    select: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#fff'
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      resize: 'vertical'
    },
    button: {
      display: 'block',
      width: '100%',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#007BFF',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer'
    },
    buttonHover: {
      backgroundColor: '#0056b3'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img
          src={thumbnail}
          alt="Thumbnail"
          style={styles.thumbnail}
        />
        <p>🚀 Step Into the Future with Our Exclusive Workshop! 🚀

Are you ready to upgrade your skills and stand out in the competitive tech world? Join us for an immersive workshop that combines knowledge, innovation, and career opportunities!

🔹 What You'll Learn:
1️⃣ Web Development: Master the art of building stunning websites that leave a lasting impression.
2️⃣ Cloud Computing: Dive into the limitless possibilities of cloud technology and learn how to leverage its power.
3️⃣ Artificial Intelligence: Explore cutting-edge AI technologies and their real-world applications.

🔹 Why Attend?

Hands-on sessions with industry experts.
Opportunity to network with like-minded professionals.
Access to exciting internship opportunities with top companies.
🔹 Who Should Attend?

Students, tech enthusiasts, and professionals looking to expand their horizons.
🎯 Don’t Miss Out! This workshop is your gateway to building a brighter, smarter, and more successful career in technology.

Seats are limited, so register now and be part of this transformative journey! 🌐
</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="mobile" style={styles.label}>Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="college" style={styles.label}>College Name</label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="year" style={styles.label}>Year of Study</label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="">Select Year</option>
            <option value="First Year">First Year</option>
            <option value="Second Year">Second Year</option>
            <option value="Third Year">Third Year</option>
            <option value="Fourth Year">Fourth Year</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="department" style={styles.label}>Department</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="">Select Department</option>
            <option value="CS">CS</option>
            <option value="IT">IT</option>
            <option value="E & TC">E & TC</option>
            <option value="MECHANICAL">MECHANICAL</option>
            <option value="CIVIL">CIVIL</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="question" style={styles.label}>Any Question</label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
            style={styles.textarea}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SeminarRegistration;
