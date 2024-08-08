import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import AdminDashboard from './components/AdminDashBoard/AdminDashboard';
import SkillList from './components/SkillList/SkillList';
import ExperienceList from './components/ExperienceList/ExperienceList';
import ResumeUploader from './components/Resume/ResumeUploader';
import ResumeViewer from './components/Resume/ResumeViewer';
// import ProfileUpload from './components/Profile/ProfileUpload';
import AdminRegistrationForm from './components/Auth/AdminRegistrationForm';
import ContactList from './components/ContactList/ContactList';
import Login from './components/Admin/Login';
import AdminList from './components/Admin/AdminList';
import { AuthProvider } from './components/context/AuthContext';
import Profile from './pages/Profile/Profile';

function App() {

  return (
    <React.StrictMode>
    <AuthProvider>
    <Router>
      <div className="App">
        <Header />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experiences" element={<ExperienceList />} />
          <Route path="/skills" element={<SkillList />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/resume-viewer" element={<ResumeViewer />} />

          <Route path="/resume-upload" element={<ResumeUploader />} />
          <Route path="/profile-upload" element={<Profile />} />
          <Route path="/profile-register" element={<AdminRegistrationForm />} />
          <Route path="/storage" element={<ContactList />} />
          <Route path="/admin-login" element={<Login />} />
          <Route path="/admin-list" element={<AdminList />} />
                                
        </Routes> 
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  </React.StrictMode>
  );
}

export default App;

  