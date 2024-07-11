import React from "react";

function Form({ cvData, setCvData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
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
      </form>
    </div>
  );
}

export default Form;