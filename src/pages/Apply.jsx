import { useParams } from "react-router-dom";
import { useState } from "react";
import jobs from "../data/jobs";

const Apply = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });

  if (!job) {
    return <h2 style={{ padding: "40px" }}>Job not found</h2>;
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just simulate submission
    console.log("Applied Job:", job.companyName);
    console.log("Application Data:", formData);

    alert("Application submitted successfully!");
  };

  return (
    <div className="apply-page">
      {/* Job Summary */}
      <div className="company-card">
        <img src={job.brandLogo} alt={job.companyName} />

        <div className="company-info">
          <h1>{job.companyName}</h1>
          <p className="role">{job.tag2}</p>
          <p className="location">📍 {job.location}</p>
        </div>
      </div>

      {/* About Company */}
      <section className="about-section">
        <h2>About the Company</h2>
        <p>{job.aboutCompany}</p>
      </section>

      {/* Application Form */}
      <section className="form-section">
        <h2>Apply for this role</h2>

        <form className="apply-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="coverLetter"
            rows="4"
            placeholder="Briefly explain why you are a good fit for this role"
            value={formData.coverLetter}
            onChange={handleChange}
          />

          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Application</button>
        </form>
      </section>
    </div>
  );
};

export default Apply;
