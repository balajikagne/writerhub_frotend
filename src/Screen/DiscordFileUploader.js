import React, { useState } from "react";
import axios from "axios";

function DiscordFileUploader({ data, setUploadStatus }) {
  const [file, setFile] = useState(null);
  const [uploadStatus, setLocalUploadStatus] = useState("");

  const WEBHOOK_URL = "https://discord.com/api/webhooks/1304436004077178930/nUTCwoprFvz4rhC0_vjxsQrHWdgkEPsD0u2ZDdOhuZVNECSGeUsvGdgV5PsyKEDPU0Pb";

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 8 * 1024 * 1024) {
        setLocalUploadStatus("File size exceeds 8 MB.");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault(); // Prevent form submission on upload button click

    if (!file) {
      setLocalUploadStatus("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("content", `Assignment Details:\nName: ${data.name}\nMobile Number: ${data.mobileNumber}\nAddress: ${data.address}\nNumber of Assignments: ${data.numberOfAssignments}\nDays: ${data.days}`);

    try {
      setLocalUploadStatus("Uploading...");
      const response = await axios.post(WEBHOOK_URL, formData,{headers:{
        "Content-Type": "application/json",
      }});
      if (response.status === 200) {
        setLocalUploadStatus("File uploaded successfully!");
        setUploadStatus(true); // Notify FormFillup that the file is uploaded
      } else {
        setLocalUploadStatus("Failed to upload the file.");
        setUploadStatus(false);
      }
    } catch (error) {
      setLocalUploadStatus("Error uploading file.");
      setUploadStatus(false);
      console.error("Upload Error:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Upload and Send Sample Document</h2>
      <input type="file" onChange={handleFileChange} style={styles.input} />
      <button onClick={handleUpload} style={styles.button}>Upload</button>
      <p style={styles.status}>{uploadStatus}</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "15px",
    width: "320px",
    margin: "20px auto",
    background: "linear-gradient(135deg, #5865F2, #3b3aaf)",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    color: "#fff",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "15px",
    textAlign: "center",
  },
  input: {
    margin: "15px 0",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    width: "100%",
    backgroundColor: "#fff",
    color: "#333",
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "#7289DA",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  status: {
    marginTop: "10px",
    fontSize: "0.9rem",
    fontStyle: "italic",
  },
};

export default DiscordFileUploader;
