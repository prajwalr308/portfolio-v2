import logo from './logo.svg';
import './App.css';
import bg from '../src/assets/Asset 1.png'
import Navbar from './components/navbar/Navbar';
import TypeWriter from './components/typeWriter/TypeWriter';

function App() {
  return (
    <div className="App">
      <img src={bg} className="img" />
      <Navbar />
      <></>
      <TypeWriter />
    </div>
  );
}

export default App;
