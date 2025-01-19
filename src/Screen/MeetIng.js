import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'; // Import axios

const MeetIng = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    meetingSchedule: '',
    question: '',
  });

  // Function to get tomorrow's date in 'YYYY-MM-DDThh:mm' format
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');
    const hours = String(tomorrow.getHours()).padStart(2, '0');
    const minutes = String(tomorrow.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the selected date is today
    const selectedDate = new Date(formData.meetingSchedule);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset today's time

    if (selectedDate <= today) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Date',
        text: 'The selected date must be tomorrow or later.',
      });
      return;
    }

    try {
      // Prepare the data for the Discord webhook
      const discordData = {
        content: `New Meeting Request:
        Name: ${formData.name}
        Mobile: ${formData.mobile}
        Email: ${formData.email}
        Meeting Schedule: ${formData.meetingSchedule}
        Question: ${formData.question}`,
      };

      // Send data to the Discord webhook using axios
      const response = await axios.post('https://discord.com/api/webhooks/1330601735265325087/JYkQwiL_PI36FKvvTPBTGccNGupf8XGxDrCnRaSUV0Pp2LTdsjHZ0a-XOnkWlTzC7q65', discordData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 204) {
        Swal.fire({
          icon: 'success',
          title: 'Form Submitted!',
          text: 'Your response has been recorded.',
        }).then(() => {
          window.location.href = "/";
        });
        setFormData({
          name: '',
          mobile: '',
          email: '',
          meetingSchedule: '',
          question: '',
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
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      resize: 'vertical',
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
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  useEffect(() => {
    // Set the minimum value of the meeting schedule to tomorrow's date
    const meetingScheduleInput = document.getElementById('meetingSchedule');
    if (meetingScheduleInput) {
      meetingScheduleInput.min = getTomorrowDate();
    }
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Meeting Schedule Form</h2>
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
          <label htmlFor="meetingSchedule" style={styles.label}>Meeting Schedule</label>
          <input
            type="datetime-local"
            id="meetingSchedule"
            name="meetingSchedule"
            value={formData.meetingSchedule}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="question" style={styles.label}>Any Questions?</label>
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

export default MeetIng;
