import React, { useState, useEffect } from 'react';
import { PageId, ModalState, MardaiEvent } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SurvivingToThrivingSection } from './components/SurvivingToThrivingSection';
import { EventsSection } from './components/EventsSection';
import { EventExperienceSection } from './components/EventExperienceSection';
import { EcosystemSection } from './components/EcosystemSection';
import { Footer } from './components/Footer';

// Subviews
import { EventsView } from './components/EventsView';
import { SeriesView } from './components/SeriesView';
import { BeyondView } from './components/BeyondView';
import { BreakthroughView } from './components/BreakthroughView';
import { BasecampView } from './components/BasecampView';
import { WorkshopsView } from './components/WorkshopsView';
import { CommunityView } from './components/CommunityView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';

// Modals & Notifications
import { EventRegistrationModal } from './components/EventRegistrationModal';
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

  const [contactContext, setContactContext] = useState<{ topic?: string; message?: string } | null>(null);

  const handleNavigate = (page: PageId) => {
    if (page !== 'contact') {
      setContactContext(null);
    }
    setCurrentPage(page);
    setModalState({ isOpen: false, type: 'none' });
  };

  const handleNavigateToContact = (topic?: string, defaultMessage?: string) => {
    if (topic || defaultMessage) {
      setContactContext({ topic, message: defaultMessage });
    }
    setCurrentPage('contact');
    setModalState({ isOpen: false, type: 'none' });
    setTimeout(() => {
      const el = document.getElementById('send-a-message');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
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

  const handleSelectEvent = (event: MardaiEvent, mode: 'register' | 'waitlist') => {
    if (mode === 'register') {
      handleNavigateToContact(
        'calgary-event',
        `Hello Mardai team,\n\nI would like to register for the Calgary event: "${event.eventName}" on ${event.date} at ${event.venue}.\n\nPlease let me know the registration steps and confirm my seat reservation.`
      );
    } else {
      handleNavigateToContact(
        'waitlist',
        `Hello Mardai team,\n\nPlease add me to the priority waitlist for ${event.city} ("${event.eventName}").\n\nPlease notify me with early-access tickets as soon as registration opens for this city.`
      );
    }
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
            {/* Section 1: Hero (Alpine Sunrise Journey Background) */}
            <HeroSection 
              onNavigate={handleNavigate}
              onOpenRegister={() => {
                const el = document.getElementById('upcoming-events');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
            />

            {/* Sections 2 & 3: The World Is Changing (Workshop Dialogue Background) & From Surviving to Thriving (Conference Symposium Background) */}
            <SurvivingToThrivingSection 
              onNavigate={handleNavigate}
              onOpenRegister={() => {
                const el = document.getElementById('upcoming-events');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
            />

            {/* Section 4: Upcoming Mardai Events (Calgary, Edmonton, Toronto, Vancouver with non-repeating Cityscapes) */}
            <EventsSection 
              onNavigate={handleNavigate}
              onSelectEvent={handleSelectEvent}
              onContactWithMessage={handleNavigateToContact}
            />

            {/* Sections 5 & 6: One Day Four Pillars & Come for the Knowledge, Leave with Connections (Long Table Shared Meal Background) */}
            <EventExperienceSection 
              onNavigate={handleNavigate}
              onOpenRegister={() => {
                const el = document.getElementById('upcoming-events');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Sections 7 through 12: Breakthrough, Basecamp, Workshops, Community Flywheel, Insights, Founder, and Final CTA (Mountain Trail Ridge Background) */}
            <EcosystemSection 
              onNavigate={handleNavigate}
              onOpenRegister={() => {
                const el = document.getElementById('upcoming-events');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
              onOpenFindPath={() => handleOpenModal('find-path')}
              onContactWithMessage={handleNavigateToContact}
            />
          </div>
        )}

        {/* Dedicated Events View */}
        {currentPage === 'events' && (
          <EventsView 
            onNavigate={handleNavigate}
            onSelectEvent={handleSelectEvent}
            onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
            onContactWithMessage={handleNavigateToContact}
          />
        )}

        {(currentPage === 'series' || currentPage === 'beyond') && (
          <SeriesView 
            onNavigate={handleNavigate}
            onShowToast={showToast}
            onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
          />
        )}

        {currentPage === 'breakthrough' && (
          <BreakthroughView 
            onOpenApply={() => handleOpenModal('apply-breakthrough')}
            onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'basecamp' && (
          <BasecampView 
            onOpenJoin={() => handleOpenModal('join-basecamp')}
            onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
            onNavigate={handleNavigate}
            onShowToast={showToast}
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
            onContactWithMessage={handleNavigateToContact}
          />
        )}

        {currentPage === 'about' && (
          <AboutView 
            onNavigate={handleNavigate}
            onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
          />
        )}

        {currentPage === 'insights' && (
          <SeriesView 
            onNavigate={handleNavigate}
            onShowToast={showToast}
            onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView 
            onNavigate={handleNavigate}
            onShowToast={showToast}
            initialTopic={contactContext?.topic}
            initialMessage={contactContext?.message}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenBasecampReview={() => handleOpenModal('basecamp-review')}
        onShowToast={showToast}
      />

      {/* Event Registration / Waitlist Modal */}
      <EventRegistrationModal 
        isOpen={modalState.isOpen && (modalState.type === 'event-register' || modalState.type === 'event-waitlist')}
        initialEvent={modalState.data}
        mode={modalState.type === 'event-waitlist' ? 'waitlist' : 'register'}
        onClose={handleCloseModal}
        onShowToast={showToast}
      />

      {/* Diagnostics & Other Modals */}
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
