import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectListPage from './pages/ProjectListPage';
import LoginSignupPage from './pages/LoginSignupPage';
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
        <Route path="/events" element={<EventListPage />} />
        <Route path="/login" element={<LoginSignupPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
