import React from 'react'
import Hero from '../src/component/Hero';
import Navbar from '../src/component/Navbar';
import Customers from '../src/component/Customers';
import LandingHeroSection from './component/LandingHeroSection';
import AwardsSection from './component/AwardsSection';
import CreateFeatureSection from './component/CreateFeatureSection';
import TestimonialSection from './component/TestimonialSection';
import EnterpriseHeroSection from './component/EnterpriseHeroSection';
import ResourcesCardsSection from './component/ResourcesCardsSection';
import Footer from './component/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Customers />
      <LandingHeroSection/>
      <AwardsSection />
      <CreateFeatureSection />
      <TestimonialSection/>
      <EnterpriseHeroSection/>
      <ResourcesCardsSection/>
       <Footer/> 
    </div>
  )
}

export default App
