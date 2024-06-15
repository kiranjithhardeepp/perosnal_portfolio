import './App.css';
import Contact from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Footer';
import Home from './Sections/Home/Home';
import Projects from './Sections/Projects/Projects';
import Skills from './Sections/Skills/Skills';
import Starfield from './Sections/Starfield/Starfield';

function App() {
  return (
    <>
      <Starfield />
      <div className="content">
        <Home />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
