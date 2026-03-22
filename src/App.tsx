/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer, Marquee } from './components/Layout';
import { Home } from './pages/Home';
import { PostDetail } from './pages/PostDetail';
import { Sera, Contact, Kiuchumi, Kisiasa, Kijamii, Diplomatic, Nakala } from './pages/Sections';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Fixed Background Elements */}
      <div className="site-bg"></div>
      <div className="site-overlay"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Marquee />
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/kiuchumi" element={<Kiuchumi />} />
            <Route path="/kisiasa" element={<Kisiasa />} />
            <Route path="/kijamii" element={<Kijamii />} />
            <Route path="/diplomatic" element={<Diplomatic />} />
            <Route path="/sera" element={<Sera />} />
            <Route path="/nakala" element={<Nakala />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
