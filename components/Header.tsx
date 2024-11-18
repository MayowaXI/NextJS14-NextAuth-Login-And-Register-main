import Head from 'next/head';

import HeroSection from '../components/HeroSection';
import AboutUs from '../components/Aboutus';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/Calltoaction';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Foundation - Empowering Communities</title>
        <meta
          name="description"
          content="Making a positive impact through education, health, and community development programs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Your Foundation - Empowering Communities" />
        <meta
          property="og:description"
          content="Learn about our impactful programs in education, health, and community development."
        />
        <meta property="og:image" content="/path-to-your-thumbnail.jpg" />
        <meta property="og:url" content="https://yourfoundation.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Foundation - Empowering Communities" />
        <meta
          name="twitter:description"
          content="Learn about our impactful programs in education, health, and community development."
        />
        <meta name="twitter:image" content="/path-to-your-thumbnail.jpg" />
        <meta name="keywords" content="foundation, community, education, health, development, non-profit" />
      </Head>
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Us Section */}
        <AboutUs />
        
        {/* Programs Section */}
        <Programs />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
