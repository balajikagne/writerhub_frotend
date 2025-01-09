import React, { useState , useRef, useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Formfillingpage.css"
import paymentqr from "../assets/qr_59.jpg";
import { useLocation } from "react-router-dom";
const WEBHOOK_URL = "https://discord.com/api/webhooks/1325410724050112624/DehVrnDC9nwcPHjftmOEoTg7qNl1ubyrOaSeIkwbDIMv23ut7cgC5wgB-s0AktJI_5hP";
function MaterialForm() {
  const formRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToTop && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.state]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    year: "",
    department: "",
    paymentScreenshot: null,
    question: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, paymentScreenshot: e.target.files[0] });
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[789][0-9]{9}$/;
    return phoneRegex.test(phone);
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
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "",
      }));
    }

    if (valid && formData.paymentScreenshot) {
      setIsSubmitting(true);

      try {
        // Create form data for file upload
        const fileData = new FormData();
        fileData.append("file", formData.paymentScreenshot);
        fileData.append(
          "payload_json",
          JSON.stringify({
            content: `**New Internship Application**\n\n**Name**: ${formData.name}\n**Phone**: ${formData.phone}\n**Year**: ${formData.year}\n**Department**: ${formData.department}\n**Domain**: ${formData.domain}\n**College Name**: ${formData.collegeName}\n**Question**: ${formData.question || "N/A"}`,
          })
        );

        // Send data to Discord webhook
        await axios.post(WEBHOOK_URL, fileData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        Swal.fire({
          title: "Application Submitted!",
          text: "Your application has been successfully submitted. Project will send on Whatsapp",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          // Reset the form
          setFormData({
            name: "",
            phone: "",
            year: "",
            department: "",
            paymentScreenshot: null,
            question: "",
          });
        });
      } catch (error) {
        console.error("Error sending message:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to submit your application. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      Swal.fire({
        title: "Error",
        text: "Please upload the payment screenshot before submitting.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="internship-form">
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
        <label>Payment QR Code</label>
        <div style={{ textAlign: "center" }}>
          <img
            src={paymentqr}
            alt="Payment QR Code"
            style={{ width: "200px", margin: "10px 0" }}
          />
        </div>
      </div>
      <div>
        <label>Upload Payment Screenshot *</label>
        <input
          type="file"
          name="paymentScreenshot"
          onChange={handleFileChange}
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
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}


export default MaterialForm;

