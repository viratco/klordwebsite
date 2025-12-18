import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Solutions from './components/Solutions';
import EcoTechnology from './components/EcoTechnology';
import ImpactAndClients from './components/ImpactAndClients';

function App() {
  return (
    <div className="app-container" style={{
      height: '100vh',
      overflowY: 'scroll',
      scrollSnapType: 'y mandatory',
      scrollBehavior: 'smooth'
    }}>
      {/* Wrap Hero in a div for scroll snap align */}
      <div id="home" style={{ scrollSnapAlign: 'start' }}>
        <Hero />
      </div>
      <Benefits />
      <Solutions />
      <EcoTechnology />
      <ImpactAndClients />
    </div>
  );
}

export default App;
