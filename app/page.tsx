
import Head from 'next/head';

import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CalltoAction';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Foundation - Empowering Communities</title>
        <meta name="description" content="Making a positive impact through education, health, and community development programs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add more meta tags as needed */}
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
