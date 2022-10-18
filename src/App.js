import NavBar from './Components/NavBar/NavBar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import './App.css';
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
    </div>
  );
}

export default App;
