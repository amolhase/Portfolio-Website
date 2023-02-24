import "./FormStyles.css";

import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {
    if (
      values.name !== "" &&
      values.email !== "" &&
      values.subject !== "" &&
      values.message !== ""
    ) {
      alert("Your Response has been successfully saved");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        ></input>
        <label>Subject</label>

        <input
          type="text"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          required
        ></input>
        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Type Your Message Here"
          required
        />
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
