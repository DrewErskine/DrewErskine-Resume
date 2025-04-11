import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setSubmitStatus({ type: null, message: "" });
      
      try {
        const response = await axios.post(
          "http://localhost:8080/api/contact",
          formState
        );
        
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! I'll get back to you soon.",
        });
        
        // Reset form
        setFormState({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus({
          type: "error",
          message: "There was a problem sending your message. Please try again later.",
        });
      } finally {
        setLoading(false);
      }
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
      <div className="section-content">
        {submitStatus.type === "success" ? (
          <div className="success-message">
            <p>{submitStatus.message}</p>
            <button
              onClick={() => setSubmitStatus({ type: null, message: "" })}
              className="mt-4"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label
                htmlFor="name-input"
                className="block text-sm font-medium"
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
                disabled={loading}
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
                className="block text-sm font-medium"
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
                disabled={loading}
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
                className="block text-sm font-medium"
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
                rows={5}
                disabled={loading}
              ></textarea>
              {errors.message && (
                <span id="message-error" className="text-red-600 text-sm">
                  {errors.message}
                </span>
              )}
            </div>
            
            {submitStatus.type === "error" && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 rounded text-red-700">
                {submitStatus.message}
              </div>
            )}
            
            <div className="text-right">
              <button 
                type="submit" 
                className="btn" 
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        )}
        
        <div className="mt-6 text-center">
          <p>Or reach me directly at: <a href="mailto:Dmerskine19@gmail.com" className="underline">Dmerskine19@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
