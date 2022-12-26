import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    AOS.init();

    return () => {};
  }, []);

  return (
    <Layout pageTitle="Le Lapin">
      <Header />
      <Hero />
      <Feature />
      <Service />
      <About />
      <Footer />
    </Layout>
  );
};

export default Index;
