
import './App.css';
import PrimaryButton from '../Buttons/primaryButtonIndex';
import NavBar from '../Nav-Bar/navBarIndex';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
import Home from '../Home/HomeIndex';
import Intro from '../10secondintro/10SecondIntro';
import Projects from '../Projects/projectsIndex';
import Experience from '../Experience/experience';
import About from '../About/about';
import Contact from '../Contact/contact';
import Footer from '../footer/footer';

// write a function that goes to x link when clikced.
const screen = '/#home'
function navigateToHome (props, screen){
return props.history.push(screen)
}

function App() {
  return (
  
    <div className="App">
    <br/>
      <NavBar/>
      <Home/>
      <Intro/>
      <Projects/>
      <Experience/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;















