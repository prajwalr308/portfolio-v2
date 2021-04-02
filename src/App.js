import logo from './logo.svg';
import './App.css';
import bg from '../src/assets/Asset 1.png'
import Navbar from './components/navbar/Navbar';
import TypeWriter from './components/typeWriter/TypeWriter';
import Skill from './components/skills/Skill';
import AboutMe from './components/aboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <img src={bg} className="img" />
      <Navbar />
     
      <TypeWriter />
      <AboutMe />
      <Skill />
    </div>
  );
}

export default App;
