import './App.css';
import NavBar from './Components/NavBar.jsx'
import Hero from './Components/Hero.js';

function App() {

  return (
    <div className="App">

      <div className='colour' />
      <NavBar />
      <div className='colour' />

      <div className='colour' />
        <Hero />
      <div className='colour' />

      </div>
  );
}

export default App;
