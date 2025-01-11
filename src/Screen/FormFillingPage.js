import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Formfillingpage.css";
import { useLocation } from "react-router-dom";
import SecureProcess from "./SecureProcess";

const WEBHOOK_URL = "https://discord.com/api/webhooks/1325886081501233274/aUDR4uwTC45PWIWH1f7ild5_dCbelZUXi9xue5TG41ikBHvb_zITmL-IX3vsERz8LD7m";

function FormFillingPage() {
  const formRef = useRef(null);
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    year: "",
    department: "",
    domain: "",
    collegeName: "",
    duration: "", // Added duration field
    question: "",
  });

  const [errors, setErrors] = useState({ phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.state?.scrollToTop && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePhone = (phone) => /^[789][0-9]{9}$/.test(phone);

  const handlePayment = () => {
    Swal.fire({
      title: "Processing Payment...",
      text: "Redirecting you to the payment gateway.",
      icon: "info",
      showConfirmButton: false,
      timer: 2000,
    });

    setTimeout(() => {
      window.location.href = "https://payments.cashfree.com/forms/writerhub"; // Redirect to Cashfree
    }, 2000);
  };

  const handleFormSubmit = async () => {
    // Called after payment confirmation
    try {
      const payload = {
        content: `**New Internship Application**\n\n**Name**: ${formData.name}\n**Phone**: ${formData.phone}\n**Year**: ${formData.year}\n**Department**: ${formData.department}\n**Domain**: ${formData.domain}\n**College Name**: ${formData.collegeName}\n**Duration**: ${formData.duration} months\n**Question**: ${formData.question || "N/A"}`,
      };

      await axios.post(WEBHOOK_URL, payload);

      Swal.fire({
        title: "Application Submitted!",
        text: "successfully submitted. Offer letter will send you within 24 hour",
        icon: "success",
        confirmButtonText: "OK",
      });

      setFormData({
        name: "",
        phone: "",
        year: "",
        department: "",
        domain: "",
        collegeName: "",
        duration: "", // Reset duration field
        question: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to submit your application. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;

    // Validate phone number
    if (!validatePhone(formData.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Please enter a valid Indian mobile number (10 digits starting with 7, 8, or 9)",
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    }

    if (valid) {
      handlePayment();

      // Mock payment confirmation for demonstration purposes
      setTimeout(() => {
        Swal.fire({
          title: "Payment Successful",
          text: "Thank you for your payment. Offer letter will send you within 24 hour",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          handleFormSubmit();
        });
      }, 4000); // Simulating a payment delay
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontWeight: "bold", color: "#ffffff" }} ref={formRef}>Fill details</h1>
      <form onSubmit={handleSubmit} className="internship-form">
        <div>
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone *</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div>
          <label>Year *</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            <option value="FY">FY</option>
            <option value="SY">SY</option>
            <option value="TY">TY</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Department *</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ENTC">ENTC</option>
            <option value="CIVIL">CIVIL</option>
            <option value="MECHANICS">MECHANICS</option>
            <option value="AI">AI</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Domain *</label>
          <select
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            required
          >
            <option value="">Select Domain</option>
            <option value="Web Development">Web Development</option>
            <option value="Java">Java</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="C++">C++</option>
            <option value="App Development">App Development</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>College Name *</label>
          <input
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Duration *</label>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          >
            <option value="">Select Duration</option>
            <option value="1">1 Month</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
          </select>
        </div>
        <div>
          <label>Any Questions (If No, type N/A) Or Mention referrer name*</label>
          <textarea
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <SecureProcess /> : "Apply Now"}
        </button>
      </form>
    </div>
  );
}

export default FormFillingPage;
