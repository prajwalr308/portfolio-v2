import logo from './logo.svg';
import './App.css';
import bg from '../src/assets/ocean.png'
import Navbar from './components/navbar/Navbar';
import TypeWriter from './components/typeWriter/TypeWriter';

import AboutMe from './components/aboutMe/AboutMe';
import SkillAndExp from './components/skillAndExp/SkillAndExp';
import ProjectGrid from './components/projects/ProjectGrid';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
    
      <Navbar />
      <div className="blueBox"></div>
     
      <img src={bg} className="img" />
      <div className="thinLine"></div>
      <TypeWriter />
      <AboutMe />
      <SkillAndExp />
      <ProjectGrid />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
