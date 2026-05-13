/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import FallingDecorations from './components/FallingDecorations';
import { Home } from './pages/Home';
import { PostDetail } from './pages/PostDetail';
import { SeraNaHojaPage, HotubaPage, Contact, Kisiasa, Kijamii, Kiteknolojia, Diplomatic, Nakala, MikakatiPage, VideosPage, MiradiPage, MaktabaPage, Mengineyo, CCM } from './Sections';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {/* Fixed Background Elements */}
      <div className="site-overlay"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1">
          {showSplash && <FallingDecorations onComplete={() => setShowSplash(false)} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/seranahojapage" element={<SeraNaHojaPage />} />
            <Route path="/hotuba" element={<HotubaPage />} />
            <Route path="/kisiasa" element={<Kisiasa />} />
            <Route path="/kijamii" element={<Kijamii />} />
            <Route path="/kiteknolojia" element={<Kiteknolojia />} />
            <Route path="/diplomatic" element={<Diplomatic />} />
            <Route path="/mikakati" element={<MikakatiPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/miradi" element={<MiradiPage />} />
            <Route path="/maktaba" element={<MaktabaPage />} />
            <Route path="/mengineyo" element={<Mengineyo />} />
            <Route path="/ccm" element={<CCM />} />
            <Route path="/nakala" element={<Nakala />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
