import About from './components/About';
import Home from './components/Home';
import Works from './components/Works';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      {/* <About />
      <Works /> */}
      <Experience />
      {/* <Footer /> */}
    </div>
  );
}

export default App;