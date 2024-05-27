import React, { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateForm()) {
      // handle form submission
      console.log("Form submitted successfully:", formState);
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formState.name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formState.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    if (!formState.message) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <section className="section sectionContact">
      <h2 className="section-title">Contact Me</h2>
      <form className="section-content" onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label
            htmlFor="name-input"
            className="block text-sm font-medium text-indigo-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name-input"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            aria-describedby="name-error"
            autoComplete="name"
          />
          {errors.name && (
            <span id="name-error" className="text-red-600 text-sm">
              {errors.name}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email-input"
            className="block text-sm font-medium text-indigo-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email-input"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            aria-describedby="email-error"
            autoComplete="email"
          />
          {errors.email && (
            <span id="email-error" className="text-red-600 text-sm">
              {errors.email}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="message-input"
            className="block text-sm font-medium text-indigo-600"
          >
            Message
          </label>
          <textarea
            id="message-input"
            name="message"
            value={formState.message}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            aria-describedby="message-error"
          ></textarea>
          {errors.message && (
            <span id="message-error" className="text-red-600 text-sm">
              {errors.message}
            </span>
          )}
        </div>
        <div className="text-right">
          <button type="submit" className="btn">
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
