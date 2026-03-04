import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
