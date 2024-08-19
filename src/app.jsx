import { useEffect } from 'react';
import Banner from './components/Banner';
import Blog from './components/Blog';
import Card from './components/Card';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-N1KN0BWRR0';

export default function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    // Send pageview with a custom path
    ReactGA.send({
      hitType: 'pageview',
      page: '/',
      title: 'Landing Page',
    });
  }, []);

  return (
    <>
      <Navbar />
      <Main />
      <Banner />
      <Card />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  );
}
