import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Countries from "./pages/Countries";
import Universities from "./pages/Universities";
import ContactUs from "./pages/ContactUs";
import IndividualCountry from "./pages/IndividualCountry";
import IndividualUniversity from "./pages/IndividualUniversity";
import RegistrationForm from "./pages/RegistrationForm";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/individualcountry" element={<IndividualCountry />} />
        <Route path="/individualuniversity/:id" element={<IndividualUniversity />} />
        <Route path="/individualcountry/:countryCode" element={<IndividualCountry />} />
        <Route path="/Register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
