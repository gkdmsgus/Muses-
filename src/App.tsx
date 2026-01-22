import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import ProjectListPage from './pages/ProjectListPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import OnBoardingPage from './pages/OnBoardingPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import EventListPage from './pages/EventListPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/onboarding" element={<OnBoardingPage />} />
        <Route path="/events" element={<EventListPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
