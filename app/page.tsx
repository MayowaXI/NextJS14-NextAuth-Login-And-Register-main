
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
  <title>BetaTravel - Explore the World</title>
  <meta name="description" content="BetaTravel offers curated travel experiences, exclusive deals, and seamless trip planning to make your journeys unforgettable." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="keywords" content="travel, travel agency, trips, vacations, travel deals, personalized trips" />
  <meta name="author" content="BetaTravel" />
  <meta property="og:title" content="BetaTravel - Explore the World" />
  <meta property="og:description" content="BetaTravel offers curated travel experiences, exclusive deals, and seamless trip planning to make your journeys unforgettable." />
  <meta property="og:url" content="https://www.betatravel.com" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="BetaTravel - Explore the World" />
  <meta name="twitter:description" content="BetaTravel offers curated travel experiences, exclusive deals, and seamless trip planning to make your journeys unforgettable." />
  {/* Add more meta tags if necessary */}
</Head>

      
      <main>
        <HeroSection />
        <AboutUs />
        <Programs />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
