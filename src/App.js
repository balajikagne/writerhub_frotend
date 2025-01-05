import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SelectionProvider } from './SelectionContext';
import HomeScreen from './Screen/HomeScreen';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutScreen from './Screen/AboutScreen';
import ServiceScreen from './Screen/ServiceScreen';
import ResultScreen from './Screen/ResultScreen';
import PreviewScreen from './Screen/PreviewScreen';
import FormFillup from './Screen/FormFillup';
import PaymentScreen from './Screen/PaymentScreen';
import ContactUsForm from './Screen/ContactUsForm';
import ProjectData from './Screen/ProjectData';
import Options from './components/Options';
import ComingSoon from './components/ComingSoon';
import NotFound from './components/NotFound';
import JobApply from './Screen/JobApply';
import LoadingSpinner from './components/LoadingSpinner';
import JobApplicationForm from './components/JobApplicationForm';
import Assignment from './Screen/Assignment';
import UniversityPage from './Screen/UniversityPage';
import DepartmentPage from './Screen/DepartmentPage';
import YearPage from './Screen/YearPage';
import SubjectPage from './Screen/SubjectPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <SelectionProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<AboutScreen />} />
              <Route path="/service" element={<ServiceScreen />} />
              <Route path="/notes" element={<ComingSoon />} />
              <Route path="/preview" element={<ComingSoon />} />
              <Route path="/form" element={<FormFillup />} />
              <Route path="/payment" element={<ComingSoon />} />
              <Route path="/contactus" element={<ContactUsForm />} />
              <Route path="/project" element={<ComingSoon />} />
              <Route path="/cse/projects" element={<ComingSoon />} />
              <Route path="/ai" element={<ComingSoon />} />
              <Route path="/cm" element={<ComingSoon />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/it/projects" element={<ProjectData />} />
              <Route path="/jobs" element={<ComingSoon />} />
              <Route path="/apply" element={<ComingSoon />} />
              <Route path="/writeup/description" element={<ComingSoon />} />
              <Route path="/universities" element={<ComingSoon />} />
              <Route path="/departments" element={<ComingSoon />} />
              <Route path="/years" element={<ComingSoon />} />
              <Route path="/subjects" element={<ComingSoon />} />
            </Routes>
            <Footer />
          </Router>
        </SelectionProvider>
      )}
    </>
  );
}

export default App;
