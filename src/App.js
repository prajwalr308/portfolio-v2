import logo from './logo.svg';
import './App.css';
import bg from '../src/components/assets/Asset 1.png'
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <img src={bg} className="img" />
      <Navbar />
    </div>
  );
}

export default App;
