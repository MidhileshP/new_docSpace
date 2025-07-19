import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Editor from './components/Editor';

function App() {
  const [currentView, setCurrentView] = useState('landing');

  const handleGetStarted = () => {
    setCurrentView('editor');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  return (
    <div className="min-h-screen">
      {currentView === 'landing' ? (
        <LandingPage onGetStarted={handleGetStarted} />
      ) : (
        <Editor onBackToLanding={handleBackToLanding} />
      )}
    </div>
  );
}

export default App;