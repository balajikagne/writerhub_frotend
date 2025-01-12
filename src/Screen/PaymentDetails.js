import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import "./Formfillingpage.css";

const WEBHOOK_URL = "https://discord.com/api/webhooks/1325410724050112624/DehVrnDC9nwcPHjftmOEoTg7qNl1ubyrOaSeIkwbDIMv23ut7cgC5wgB-s0AktJI_5hP";

function PaymentDetails() {
  const location = useLocation();
  const nameInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    collegeName: "",
    question: "",
  });

  const [errors, setErrors] = useState({ phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.state?.scrollToTop) {
      nameInputRef.current?.focus(); // Focus on the Name field
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePhone = (phone) => /^[789][0-9]{9}$/.test(phone);

  const handlePayment = async () => {
    try {
      const payload = {
        content: `**New Application**\n\n**Name**: ${formData.name}\n**Phone**: ${formData.phone}\n**College Name**: ${formData.collegeName}\n**Question**: ${formData.question || "N/A"}`,
      };

      await axios.post(WEBHOOK_URL, payload);
    } catch (error) {
      console.log(error);
    }

    Swal.fire({
      title: "Processing Payment...",
      text: "Redirecting you to the payment gateway.",
      icon: "info",
      showConfirmButton: false,
      timer: 2000,
    });

    setTimeout(() => {
      window.location.href = "https://payments.cashfree.com/forms/writerhubprojects"; // Redirect to Cashfree
    }, 2000);
  };

  const handleFormSubmit = async () => {
    try {
      setFormData({
        name: "",
        phone: "",
        collegeName: "",
        question: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

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
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bold", color: "#ffffff" }} ref={nameInputRef}>
        Fill details
      </h1>
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
          <label>Any Questions (If No, type N/A) *</label>
          <textarea
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default PaymentDetails;
