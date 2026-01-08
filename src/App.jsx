import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import NoiseFilter from './components/common/NoiseFilter';
import Onboarding from './components/onboarding/Onboarding';
import MainPage from './components/main/MainPage';
import BrowsePage from './components/browse/BrowsePage';
import MyTicketPage from './components/ticket/MyTicketPage';
import MyPage from './components/mypage/MyPage';
import TabBar from './components/common/TabBar';
import ProjectDetailModal from './components/main/ProjectDetailModal';
import CreateProjectPage from './components/creator/CreateProjectPage';
import PaymentPage from './components/payment/PaymentPage';

/* Muses Design System Implementation
  - Colors: Muses Orange (#e98047), Purple (#A569BD), Neutrals
  - Typography: Pretendard (fallback to sans-serif)
  - Vibe: Sunset Noise Gradient
*/

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(null); // { project, reward }
  const [ticketModalOpen, setTicketModalOpen] = useState(false);

  if (showOnboarding) {
    return (
      <>
        <NoiseFilter />
        <Onboarding onStart={() => setShowOnboarding(false)} />
      </>
    );
  }

  const handlePaymentComplete = () => {
    // 결제 완료 후 티켓 페이지로 이동
    setActiveTab('ticket');
  };

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <MainPage onProjectClick={setSelectedProject} />;
      case 'category':
        return <BrowsePage onProjectClick={setSelectedProject} />;
      case 'ticket':
        return <MyTicketPage onTicketModalChange={setTicketModalOpen} />;
      case 'my':
        return <MyPage onOpenCreateProject={() => setShowCreateProject(true)} />;
      default:
        return <MainPage onProjectClick={setSelectedProject} />;
    }
  };

  return (
    <>
      <GlobalStyles />
      <NoiseFilter />
      {renderPage()}

      {/* TabBar는 CreateProjectPage, PaymentPage, TicketModal이 열려있지 않을 때만 표시 */}
      {!showCreateProject && !paymentInfo && !ticketModalOpen && (
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      )}

      {selectedProject && !paymentInfo && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenPayment={(project, reward) => {
            setPaymentInfo({ project, reward });
            setSelectedProject(null);
          }}
        />
      )}

      {/* 프로젝트 생성 페이지 */}
      {showCreateProject && (
        <CreateProjectPage onClose={() => setShowCreateProject(false)} />
      )}

      {/* 결제 페이지 */}
      {paymentInfo && (
        <PaymentPage
          project={paymentInfo.project}
          reward={paymentInfo.reward}
          onClose={() => setPaymentInfo(null)}
          onComplete={handlePaymentComplete}
        />
      )}
    </>
  );
}
