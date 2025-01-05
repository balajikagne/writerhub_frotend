import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Import Axios
import Swal from "sweetalert2";

function JobApplicationForm() {
  const navigate = useNavigate(); // Use navigate for programmatic navigation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    resume: null, // Set initial resume as null to ensure file is checked
  });
  const [error, setError] = useState("");

  const validateMobileNumber = (mobile) => /^[7-9][0-9]{9}$/.test(mobile);
  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      resume: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state on submit attempt

    // Validate Email
    if (!validateEmail(formData.email)) {
      Swal.fire("Invalid Email", "Please enter a valid email address.", "error");
      return;
    }

    // Validate Mobile Number
    if (!validateMobileNumber(formData.mobile)) {
      Swal.fire("Invalid Mobile Number", "Please enter a valid 10-digit mobile number.", "error");
      return;
    }

    // Check if a resume file is uploaded
    if (!formData.resume) {
      Swal.fire("Resume Missing", "Please upload your resume.", "error");
      return;
    }

    // Prepare form data for upload
    const formData1 = new FormData();
    formData1.append("file", formData.resume, formData.resume.name);
    formData1.append(
      "content",
      `Assignment Details:\nName: ${formData.name}\nMobile Number: ${formData.mobile}\nEmail Address: ${formData.email}\nResume: ${formData.resume.name}`
    );

    const WEBHOOK_URL = "https://discord.com/api/webhooks/1304747804266074213/KWjbcuUeA-jiaCFEuHdvj0Wtfq_RJjxq6wBYnXiSk7Ggckv5-lnc6nAqDqvwkJKw9l57";

    try {
      const response = await axios.post(WEBHOOK_URL, formData1, {
        headers: {
          "Content-Type": "multipart/form-data", // Allow Axios to handle Content-Type for FormData
        },
      });

      if (response.status === 200) {
        Swal.fire("Success", "Your application has been submitted successfully!", "success");
        navigate("/jobs");
      } else {
        Swal.fire("Submission Failed", "Failed to submit the application. Please try again later.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "An error occurred while submitting your application.", "error");
    }
  };

  return (
    <div className="form-container" style={styles.formContainer}>
      <h1 style={styles.heading}>Apply for Job</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter your full name"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter your email address"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            placeholder="Enter 10-digit mobile number"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Resume (Upload PDF or DOCX)</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            accept=".pdf, .doc, .docx"
            required
            style={styles.inputFile}
          />
        </div>

        <button type="submit" style={styles.submitButton}>
          Submit Application
        </button>
      </form>
    </div>
  );
}

const styles = {
  formContainer: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    marginTop: "50px",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    fontSize: "2em",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "1.1em",
    color: "#555",
    marginBottom: "8px",
  },
  input: {
    padding: "10px",
    fontSize: "1em",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  inputFile: {
    padding: "10px",
    fontSize: "1em",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
    cursor: "pointer",
  },
  submitButton: {
    padding: "12px 25px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.1em",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default JobApplicationForm;
