import React from "react";
import "./Form.css";

function Form({ cvData, setCvData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="form-container">
      <h2>Enter your details</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={cvData.name}
          onChange={handleChange}
        />
        <input
        type="text"
        name="summary"
        placeholder="Summary"
        value={cvData.summary}
        onChange={handleChange}
      />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={cvData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={cvData.phone}
          onChange={handleChange}
        />
        <textarea
          name="education"
          placeholder="Education"
          value={cvData.education}
          onChange={handleChange}
        />
        <textarea
          name="experience"
          placeholder="Experience"
          value={cvData.experience}
          onChange={handleChange}
        />
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default Form;