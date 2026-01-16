import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectListPage from './pages/ProjectListPage';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import OnBoardingPage from './pages/OnBoardingPage';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import EventListPage from './pages/EventListPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/onboarding" element={<OnBoardingPage />} />
        <Route path="/events" element={<EventListPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
