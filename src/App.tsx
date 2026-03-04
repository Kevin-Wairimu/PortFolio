import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Portfolio />
      <FAQ />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
