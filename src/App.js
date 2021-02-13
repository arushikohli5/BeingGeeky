import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Geeky from './components/Geeky.js';
import Tut from './components/tutorial.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Geeky/>
      <Tut/>
    </div>
  );
}

export default App;
