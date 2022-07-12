
import './App.css';
import PrimaryButton from '../Buttons/primaryButtonIndex';
import NavBar from '../Nav-Bar/navBarIndex';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
import Home from '../Home/HomeIndex';

// write a function that goes to x link when clikced.


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <br/>
      <NavBar home={<a href='#home'/>}/>
      <Link to='#home'>
        Home
      </Link>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <Home/>
    </div>
    </BrowserRouter>
  );
}

export default App;















