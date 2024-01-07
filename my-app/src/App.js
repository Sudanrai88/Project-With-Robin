import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.jsx'
import Hero from './Components/Hero.js';
import PlayButton from './Components/PlayButton.jsx';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <PlayButton />
    </div>


  );
}

export default App;
