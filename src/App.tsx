import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import ProjectListPage from './pages/ProjectListPage';
import MyPage from './pages/MyPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import EventListPage from './pages/EventListPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import CreateProjectPage from './pages/CreateProjectPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OnBoardingPage from './pages/OnBoardingPage';
import EditProfilePage from './components/MyPage/profile/EditProfilePage';
import ProjectResultPage from './components/MyPage/project-result/ProjectResultPage';
import BillingSuccessPage from './pages/BillingSuccessPage';
import BillingFailPage from './pages/BillingFailPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
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

function AppLayout() {
  const { pathname } = useLocation();
  //const hideHeaderPrefixes = ['/create-project', '/admin']; // 헤더를 숨길 경로 설정 예시, 하단에 추가하시면 됩니다.
  const hideHeaderPrefixes = ['/admin', '/create'];
  const shouldHideHeader = hideHeaderPrefixes.some((prefix) =>
    pathname.startsWith(prefix)
  );

  return (
    <>
      {!shouldHideHeader && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/onboarding" element={<OnBoardingPage />} />
        <Route path="/events" element={<EventListPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/mypage">
          <Route index element={<MyPage />} />
          <Route path="editprofile" element={<EditProfilePage />} />
          <Route path="projectresult/:id" element={<ProjectResultPage />} />
        </Route>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/billing/success" element={<BillingSuccessPage />} />
        <Route path="/billing/fail" element={<BillingFailPage />} />
        <Route path="/create" element={<CreateProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
}
