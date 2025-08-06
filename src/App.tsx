import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import ArtistGuide from './pages/ArtistGuide';
import KalaRooms from './pages/KalaRooms';
import NinetySeconds from './pages/NinetySeconds';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/artist-guide" element={<ArtistGuide />} />
            <Route path="/kala-rooms" element={<KalaRooms />} />
            <Route path="/90-secs" element={<NinetySeconds />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;