import React, { useState, useEffect } from 'react';
import { PageId, ModalState } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { OfferingsSection } from './components/OfferingsSection';
import { WhatAreYouLookingForSection } from './components/WhatAreYouLookingForSection';
import { LeadMagnetReviewBanner } from './components/LeadMagnetReviewBanner';
import { Footer } from './components/Footer';

// Subviews
import { BeyondView } from './components/BeyondView';
import { BreakthroughView } from './components/BreakthroughView';
import { BasecampView } from './components/BasecampView';
import { WorkshopsView } from './components/WorkshopsView';
import { CommunityView } from './components/CommunityView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';

// Modals & Notifications
import { BasecampReviewModal } from './components/BasecampReviewModal';
import { FindYourPathModal } from './components/FindYourPathModal';
import { ApplicationModal } from './components/ApplicationModal';
import { FrameworkExplainerModal } from './components/FrameworkExplainerModal';
import { ToastContainer, ToastMessage } from './components/Toast';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    type: 'none'
  });
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const showToast = (title: string, message?: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now().toString();
    const newToast: ToastMessage = { id, title, message, type };
    setToasts(prev => [...prev, newToast]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const handleDismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    setModalState({ isOpen: false, type: 'none' });
  };

  const handleOpenModal = (type: ModalState['type'], data?: any) => {
    setModalState({
      isOpen: true,
      type,
      data
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      type: 'none'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F2] text-[#1A1A1A] selection:bg-[#2D4F3C] selection:text-white">
      
      {/* Universal Navigation Header */}
      <Header 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
        onOpenFindPath={() => handleOpenModal('find-path')}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div className="space-y-0">
            <HeroSection 
              onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
              onOpenFindPath={() => handleOpenModal('find-path')}
              onNavigate={handleNavigate}
            />
            <PhilosophySection 
              onNavigate={handleNavigate}
              onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
            />
            <OfferingsSection 
              onNavigate={handleNavigate}
            />
            <WhatAreYouLookingForSection 
              onNavigate={handleNavigate}
              onOpenFindPath={() => handleOpenModal('find-path')}
            />
            <LeadMagnetReviewBanner 
              onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
            />
          </div>
        )}

        {currentPage === 'beyond' && (
          <BeyondView 
            onOpenFramework={(item) => handleOpenModal('framework-view', item)}
            onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'breakthrough' && (
          <BreakthroughView 
            onOpenApply={() => handleOpenModal('apply-breakthrough')}
            onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'basecamp' && (
          <BasecampView 
            onOpenJoin={() => handleOpenModal('join-basecamp')}
            onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'workshops' && (
          <WorkshopsView 
            onOpenBook={() => handleOpenModal('book-workshop')}
            onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'community' && (
          <CommunityView 
            onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'about' && (
          <AboutView 
            onNavigate={handleNavigate}
            onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
          />
        )}

        {currentPage === 'insights' && (
          <BeyondView 
            onOpenFramework={(item) => handleOpenModal('framework-view', item)}
            onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView 
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
        onShowToast={showToast}
      />

      {/* Modals */}
      <BasecampReviewModal 
        isOpen={modalState.isOpen && modalState.type === 'basecamp-review'}
        onClose={handleCloseModal}
        onNavigate={handleNavigate}
        onShowToast={showToast}
      />

      <FindYourPathModal 
        isOpen={modalState.isOpen && modalState.type === 'find-path'}
        onClose={handleCloseModal}
        onNavigate={handleNavigate}
        onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
      />

      <ApplicationModal 
        isOpen={modalState.isOpen && (modalState.type === 'apply-breakthrough' || modalState.type === 'join-basecamp' || modalState.type === 'book-workshop')}
        programType={
          modalState.type === 'apply-breakthrough' ? 'breakthrough' :
          modalState.type === 'join-basecamp' ? 'basecamp' : 'workshops'
        }
        onClose={handleCloseModal}
        onShowToast={showToast}
      />

      <FrameworkExplainerModal 
        isOpen={modalState.isOpen && modalState.type === 'framework-view'}
        insight={modalState.data}
        onClose={handleCloseModal}
        onNavigate={handleNavigate}
        onShowToast={showToast}
      />

      {/* Toast Notification Stack */}
      <ToastContainer toasts={toasts} onDismiss={handleDismissToast} />

    </div>
  );
}

export default App;
