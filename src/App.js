import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Geeky from './components/Geeky.js';
import Tut from './components/tutorial.js';
import Vedio from './components/vedio';
import Cupons from './components/cupons';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Geeky/>
      <Tut/>
      <Vedio/>
      <Cupons/>
      <Footer/>
    </div>
  );
}

export default App;
