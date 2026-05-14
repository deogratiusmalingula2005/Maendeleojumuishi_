/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import VideoIntro from './components/VideoIntro';
import WelcomeIntro from './components/WelcomeIntro';
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
  const [splashStep, setSplashStep] = useState<'video' | 'intro' | 'none'>('video');
  const audioRef = React.useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = '/Profile1.jpg';
    if (splashStep === 'intro' && audioRef.current) {
      audioRef.current.play().catch(e => console.error("Play failed", e));
    }
  }, [splashStep]);

  return (
    <Router>
      <audio ref={audioRef} src="/Maendeleojumuishi.mp3" />
      <ScrollToTop />
      {/* Fixed Background Elements */}
      <div className="site-overlay"></div>

      <div className="relative z-10 flex flex-col min-h-screen bg-[url(/Profile1.jpg)] bg-cover bg-center bg-fixed bg-no-repeat">
        {splashStep === 'none' && <Header />}
        
        <main className="flex-1">
          {splashStep === 'video' && <VideoIntro onStart={() => audioRef.current?.pause()} onComplete={() => setSplashStep('intro')} />}
          {splashStep === 'intro' && <WelcomeIntro onComplete={() => setSplashStep('none')} />}
          {splashStep === 'none' && (
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
          )}
        </main>

        {splashStep === 'none' && <Footer />}
      </div>
    </Router>
  );
}
