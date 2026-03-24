/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { PostDetail } from './pages/PostDetail';
import { SeraPage, Contact, Kiuchumi, Kisiasa, Kijamii, Kiteknolojia, Diplomatic, Nakala, MikakatiPage, Mengineyo, CCM } from './pages/Sections';

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
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/kiuchumi" element={<Kiuchumi />} />
            <Route path="/kisiasa" element={<Kisiasa />} />
            <Route path="/kijamii" element={<Kijamii />} />
            <Route path="/kiteknolojia" element={<Kiteknolojia />} />
            <Route path="/diplomatic" element={<Diplomatic />} />
            <Route path="/sera" element={<SeraPage />} />
            <Route path="/mikakati" element={<MikakatiPage />} />
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
