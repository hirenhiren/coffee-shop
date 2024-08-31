import Hero from './components/Hero';
import Nav from "./components/Nav";
import ServiceSection from './components/ServiceSection';
import PremiumCoffee from './components/PremiumCoffee';
import Playstore from './components/Playstore';
import Testimonials from './components/testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <ServiceSection />
      <PremiumCoffee />
      <Playstore />
      <Testimonials />
     <Footer />
    </div>
  );
};

export default App;
