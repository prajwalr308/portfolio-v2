import logo from './logo.svg';
import './App.css';
import bg from '../src/assets/ocean.png'
import Navbar from './components/navbar/Navbar';
import TypeWriter from './components/typeWriter/TypeWriter';

import AboutMe from './components/aboutMe/AboutMe';
import SkillAndExp from './components/skillAndExp/SkillAndExp';
import ProjectGrid from './components/projects/ProjectGrid';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
    
      <Navbar />
      <img src={bg} className="img" />
      <TypeWriter />
      <AboutMe />
      <SkillAndExp />
      <ProjectGrid />
      <Contact />
    </div>
  );
}

export default App;
