import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactForm = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    emailjs
      .send(
        serviceId, // ✅ Your EmailJS Service ID
        templateId, // ✅ Your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          subject: formData.subject,
          time: new Date().toLocaleString(), // Optional: Add the current time
        },
        publicKey // ✅ Your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setStatus("Email sent successfully!");
          setFormData({ name: "", email: "", message: "", subject: "" }); // Clear form fields
        },
        (error) => {
          console.error("Email failed to send", error);
          setStatus("Failed to send email. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl text-center mb-8 pt-20 md:pt-40">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
            We're Here To Help!
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 px-4">
            Got Questions About Studying Abroad? Our Team Is Ready To Assist
            You. Reach Out To Us Via Phone, Email, Or Visit Our Office—We'd Love
            To Hear From You!
          </p>
        </div>

        <div className="w-full max-w-5xl mt-10 mb-20 mx-auto p-4 sm:p-8 lg:p-12 border border-gray-300 rounded-3xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form Section */}
            <div className="flex-1 w-full">
              <form onSubmit={handleSubmit}>
                <label className="block text-gray-700 font-medium">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 text-sm mt-1 border border-gray-200 rounded-3xl"
                />

                <label className="block text-gray-700 font-medium mt-4">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 text-sm mt-1 border border-gray-200 rounded-3xl"
                />

                <label className="block text-gray-700 font-medium mt-4">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 text-sm mt-1 border border-gray-200 rounded-3xl"
                />

                <label className="block text-gray-700 font-medium mt-4">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-1 border border-gray-200 rounded-3xl h-28"
                />

                <div className="flex items-center justify-center lg:justify-start mt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full max-w-[200px] bg-black text-white px-2 py-2 rounded-3xl hover:bg-gray-800 transition-colors disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>

              {status && (
                <p className="text-center mt-4 text-gray-700">{status}</p>
              )}
            </div>

            {/* Info Section */}
            <div className="flex-1 bg-black text-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-base">Info</h3>
              <div className="mt-7 space-y-4">
                <p className="flex items-center space-x-4 sm:space-x-6">
                  <MdEmail className="text-xl sm:text-2xl" />
                  <span>email@gmail.com</span>
                </p>
                <p className="flex items-center space-x-4 sm:space-x-6">
                  <MdPhone className="text-xl sm:text-2xl" />
                  <span>+427755666</span>
                </p>
                <p className="flex items-center space-x-4 sm:space-x-6">
                  <MdLocationOn className="text-xl sm:text-2xl" />
                  <span>Location</span>
                </p>
              </div>

              {/* Social Media */}
              <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-7 mt-12 sm:mt-20">
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                >
                  <FaFacebookSquare className="text-xl sm:text-2xl text-black" />
                </a>
                <a
                  href="https://instagram.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                >
                  <FaInstagram className="text-xl sm:text-2xl text-black" />
                </a>
                <a
                  href="https://twitter.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                >
                  <FaTwitter className="text-xl sm:text-2xl text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactForm;
