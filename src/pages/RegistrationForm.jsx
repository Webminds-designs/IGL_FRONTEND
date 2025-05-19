import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StepIndicator from "../components/StepIndicator";
import { CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser"; // EmailJS import

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    year: "",
    month: "",
    date: "",
    email: "",
    mobile: "",
    alternateMobile: "",
    address: "",
    qualification: "",
    specialQualifications: "",
    fieldOfInterest: "",
    studyDestination1: "",
    studyDestination2: "",
    studyDestination3: "",
    englishLevel: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = "Full Name is required.";
      if (!formData.gender) newErrors.gender = "Gender is required.";
      if (!formData.year || !formData.month || !formData.date)
        newErrors.dob = "Date of Birth is required.";
      if (!formData.email) newErrors.email = "Email Address is required.";
      if (!formData.mobile) newErrors.mobile = "Mobile Number is required.";
      if (!formData.address) newErrors.address = "Address is required.";
    }
    if (step === 2) {
      if (!formData.qualification)
        newErrors.qualification = "Highest Academic Qualification is required.";
      if (!formData.specialQualifications)
        newErrors.specialQualifications =
          "Special Qualifications are required.";
      if (!formData.fieldOfInterest)
        newErrors.fieldOfInterest = "Field of Interest is required.";
      if (!formData.studyDestination1)
        newErrors.studyDestination1 =
          "Preferred Study Destination is required.";
    }
    if (step === 3) {
      if (!formData.agree) newErrors.agree = "You must agree to the terms.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const validateEmail = (e) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(e.target.value)) {
      setErrors({ ...errors, email: "Invalid email format." });
    } else {
      setErrors({ ...errors, email: "" });
    }
  };

  const restrictToLetters = (e) => {
    const regex = /^[A-Za-z\s]*$/;
    if (!regex.test(e.key) && e.key !== "Backspace") e.preventDefault();
  };

  const restrictToNumbers = (e) => {
    const regex = /^[0-9]*$/;
    if (!regex.test(e.key) && e.key !== "Backspace") e.preventDefault();
  };

  const restrictYear = (e) => {
    const regex = /^[0-9]*$/;
    if (!regex.test(e.key) && e.key !== "Backspace") e.preventDefault();
    const currentYear = new Date().getFullYear();
    const inputYear = parseInt(e.target.value + e.key, 10);
    if (inputYear > currentYear && e.key !== "Backspace") e.preventDefault();
  };

  const restrictDate = (e) => {
    const regex = /^[0-9]*$/;
    if (!regex.test(e.key) && e.key !== "Backspace") e.preventDefault();
    const inputDate = parseInt(e.target.value + e.key, 10);
    if ((inputDate < 1 || inputDate > 31) && e.key !== "Backspace")
      e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      // Send email via EmailJS
      emailjs
        .send(
          "service_rf4dwi8", // ✅ Replace with your EmailJS service ID
          "template_6370b6q", // ✅ Replace with your EmailJS template ID
          {
            ...formData,
            dob: `${formData.year}-${formData.month}-${formData.date}`,
          },
          "Gy_U2G1sv98JkAhfs" // ✅ Replace with your EmailJS public key
        )
        .then(
          (result) => {
            console.log("Email successfully sent!", result.text);
            setSubmitted(true);
          },
          (error) => {
            console.error("Email sending failed:", error.text);
            alert("Submission failed. Please try again.");
          }
        );
    }
  };

  return (
    <div
      style={{ backgroundColor: "rgb(255, 255, 255)" }}
      className="min-h-screen"
    >
      <Navbar />
      <div className="text-center mt-12 md:mt-24 lg:mt-28 py-8 md:py-12 px-4">
        <h3 className="text-gray-500 text-sm md:text-lg uppercase tracking-wide">
          STUDENT ASSESSMENT & REGISTRATION FORM
        </h3>
        <h1 className="text-2xl md:text-4xl font-semibold text-black mt-2">
          Start Your Study Abroad Journey With IGL Sri Lanka
        </h1>
        <p className="text-gray-600 text-xs md:text-sm mt-4 max-w-3xl mx-auto">
          Fill out this quick assessment to check your eligibility. Our experts
          will guide you!
        </p>
      </div>

      <div className="flex-1 max-w-3xl mx-auto w-full px-4 md:px-6 lg:px-8 py-6 md:py-10">
        {!submitted && <StepIndicator step={step} />}
        <div className="bg-white py-6 md:py-10 px-4 md:px-8 lg:px-12 rounded-4xl border border-gray-300">
          {submitted ? (
            <div className="flex flex-col items-center justify-center p-4 md:p-6 rounded-4xl">
              <div className="p-3 md:p-4 bg-green-100 rounded-full">
                <CheckCircle className="text-green-500 w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h2 className="text-base md:text-lg font-semibold mt-4 text-center">
                Submission Successful!
              </h2>
              <p className="text-gray-500 text-center text-sm md:text-base max-w-md">
                Your form has been submitted successfully. Our team will contact
                you soon.
              </p>
            </div>
          ) : (
            <>
              {/* Step 1: Personal Details */}
              {step === 1 && (
                <div className="space-y-7 text-sm">
                  <label>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 p-2 rounded-4xl"
                    value={formData.fullName}
                    onChange={handleChange}
                    onKeyDown={restrictToLetters} // Restrict to letters only
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs">{errors.fullName}</p>
                  )}

                  <label>
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    className="w-full border border-gray-300 p-2 rounded-4xl text-gray-500 cursor-pointer"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500 text-xs">{errors.gender}</p>
                  )}

                  <label>
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      name="year"
                      placeholder="Year"
                      className="w-1/3 border border-gray-300 p-2 rounded-4xl"
                      value={formData.year}
                      onChange={handleChange}
                      onKeyDown={restrictYear} // Restrict to past years
                    />
                    <select
                      name="month"
                      className="w-1/3 border border-gray-300 p-2 rounded-4xl text-gray-500 cursor-pointer"
                      value={formData.month}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Month
                      </option>
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                    <input
                      type="text"
                      name="date"
                      placeholder="Date"
                      className="w-1/3 border border-gray-300 p-2 rounded-4xl"
                      value={formData.date}
                      onChange={handleChange}
                      onKeyDown={restrictDate} // Restrict to 1-31
                    />
                  </div>
                  {errors.dob && (
                    <p className="text-red-500 text-xs">{errors.dob}</p>
                  )}

                  <label>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full border border-gray-300 p-2 rounded-4xl"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={validateEmail} // Validate email format on blur
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}

                  <label>
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    className="w-full border border-gray-300 p-2 rounded-4xl"
                    value={formData.mobile}
                    onChange={handleChange}
                    onKeyDown={restrictToNumbers} // Restrict to numbers only
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-xs">{errors.mobile}</p>
                  )}

                  <label>Alternate Mobile Number</label>
                  <input
                    type="text"
                    name="alternateMobile"
                    placeholder="Enter your alternate mobile number"
                    className="w-full border border-gray-300 p-2 rounded-4xl"
                    value={formData.alternateMobile}
                    onChange={handleChange}
                    onKeyDown={restrictToNumbers} // Restrict to numbers only
                  />

                  <label>
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    className="w-full border border-gray-300 p-2 rounded-4xl"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs">{errors.address}</p>
                  )}
                </div>
              )}

              {/* Step 2: Academic Details */}
              {step === 2 && (
                <div className="space-y-7 text-sm">
                  <label>
                    Highest Academic Qualification{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="qualification"
                    className="w-full border border-gray-300 p-2 cursor-pointer rounded-4xl text-gray-500"
                    value={formData.qualification}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select Qualification
                    </option>
                    <option>O-Level</option>
                    <option>A-Level</option>
                    <option>Diploma</option>
                    <option>Bachelor's</option>
                    <option>Master’s</option>
                  </select>
                  {errors.qualification && (
                    <p className="text-red-500 text-xs">
                      {errors.qualification}
                    </p>
                  )}

                  <label>
                    Other Special Qualifications{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="specialQualifications"
                    placeholder="Enter your special qualifications"
                    className="w-full border border-gray-300 p-2 rounded-4xl"
                    value={formData.specialQualifications}
                    onChange={handleChange}
                  />
                  {errors.specialQualifications && (
                    <p className="text-red-500 text-xs">
                      {errors.specialQualifications}
                    </p>
                  )}

                  <label>
                    Fields of Interest for Study{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fieldOfInterest"
                    placeholder="Enter your field of interest"
                    className="w-full border border-gray-300 p-2 rounded-4xl"
                    value={formData.fieldOfInterest}
                    onChange={handleChange}
                    onKeyDown={restrictToLetters} // Restrict to letters only
                  />
                  {errors.fieldOfInterest && (
                    <p className="text-red-500 text-xs">
                      {errors.fieldOfInterest}
                    </p>
                  )}

                  <label>
                    Preferred Study Destinations{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="studyDestination1"
                      placeholder="Option 1"
                      className="w-full border border-gray-300 p-2 rounded-4xl"
                      value={formData.studyDestination1}
                      onChange={handleChange}
                      onKeyDown={restrictToLetters} // Restrict to letters only
                    />
                    {errors.studyDestination1 && (
                      <p className="text-red-500 text-xs">
                        {errors.studyDestination1}
                      </p>
                    )}
                    <input
                      type="text"
                      name="studyDestination2"
                      placeholder="Option 2"
                      className="w-full border border-gray-300 p-2 rounded-4xl"
                      value={formData.studyDestination2}
                      onChange={handleChange}
                      onKeyDown={restrictToLetters} // Restrict to letters only
                    />
                    <input
                      type="text"
                      name="studyDestination3"
                      placeholder="Option 3"
                      className="w-full border border-gray-300 p-2 rounded-4xl"
                      value={formData.studyDestination3}
                      onChange={handleChange}
                      onKeyDown={restrictToLetters} // Restrict to letters only
                    />
                  </div>

                  <label>English Competency Level</label>
                  <select
                    name="englishLevel"
                    className="w-full border border-gray-300 p-2 rounded-4xl text-gray-500 cursor-pointer"
                    value={formData.englishLevel}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select Level
                    </option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Native</option>
                  </select>
                </div>
              )}

              {/* Step 3: Additional Details */}
              {step === 3 && (
                <div className="space-y-7 text-sm">
                  <label>Message to IGL (If Any)</label>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    className="w-full border border-gray-300 p-2 rounded-4xl"
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <div className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agree"
                      className="w-4 h-4 cursor-pointer"
                      checked={formData.agree}
                      onChange={handleChange}
                    />
                    <label>
                      I Agree To Be Contacted By IGL Regarding My Study Abroad
                      Application.
                    </label>
                  </div>
                  {errors.agree && (
                    <p className="text-red-500 text-xs">{errors.agree}</p>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step < 3 ? (
                  <button
                    onClick={nextStep}
                    className="w-full px-4 py-2 cursor-pointer rounded-4xl bg-white text-black border border-black hover:bg-black hover:text-white transition-colors"
                  >
                    Next Step →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="w-full px-4 py-2 rounded-4xl bg-black text-white cursor-pointer"
                  >
                    Get My Free Assessment
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegistrationForm;
