import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectListPage from './pages/ProjectListPage';
import LoginSignupPage from './pages/LoginSignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/login" element={<LoginSignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
