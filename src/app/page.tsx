'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchFilters from '@/components/SearchFilters';
import FeaturedCars from '@/components/FeaturedCars';
import Stats from '@/components/Stats';
import FinanceCalculator from '@/components/FinanceCalculator';
import SellWithUs from '@/components/SellWithUs';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';
import FAQ from '@/components/FAQ';
import ConnectForm from '@/components/ConnectForm';
import Footer from '@/components/Footer';
import { featuredCars, availableModels } from '@/data/cars';

export default function Home() {
  const [showConnectForm, setShowConnectForm] = useState(false);

  useEffect(() => {
    // Show the connect form on page load after a brief delay
    const timer = setTimeout(() => {
      setShowConnectForm(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    setShowConnectForm(true);
  };

  const handleMakeRequest = () => {
    setShowConnectForm(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main id="home">
        <Hero onGetStarted={handleGetStarted} />
        
        {/* Search Filters - Sticky below header */}
        <SearchFilters />
        
        {/* Trust Badges */}
        <TrustBadges />
        
        {/* Featured Cars Inventory */}
        <section id="inventory">
          <FeaturedCars cars={featuredCars} onMakeRequest={handleMakeRequest} />
        </section>
        
        {/* Stats Section */}
        <Stats />
        
        {/* Finance Calculator */}
        <section id="finance">
          <FinanceCalculator />
        </section>
        
        {/* Sell With Us */}
        <section id="sell">
          <SellWithUs />
        </section>
        
        {/* Customer Testimonials */}
        <Testimonials />
        
        {/* FAQ Section */}
        <section id="faq">
          <FAQ />
        </section>
      </main>

      <Footer />

      {showConnectForm && (
        <ConnectForm
          onClose={() => setShowConnectForm(false)}
          availableModels={availableModels}
        />
      )}
    </div>
  );
}
