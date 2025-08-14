
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PasswordProtection from './components/PasswordProtection';
import Homepage from './pages/Homepage';
import ArtistGuide from './pages/ArtistGuide';
import KalaRooms from './pages/KalaRooms';
import Content from './pages/content';
import About from './pages/About';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  if (!isUnlocked) {
    return <PasswordProtection onUnlock={handleUnlock} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navigation />
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/artist-guide" element={<ArtistGuide />} />
              <Route path="/kala-rooms" element={<KalaRooms />} />
              <Route path="/content" element={<Content />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;