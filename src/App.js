import logo from './logo.svg';
import './App.css';
import bg from '../src/assets/Asset 1.png'
import Navbar from './components/navbar/Navbar';
import TypeWriter from './components/typeWriter/TypeWriter';

import AboutMe from './components/aboutMe/AboutMe';
import SkillAndExp from './components/skillAndExp/SkillAndExp';

function App() {
  return (
    <div className="App">
    
      <Navbar />
      <img src={bg} className="img" />
      <TypeWriter />
      <AboutMe />
      <SkillAndExp />
    </div>
  );
}

export default App;
