import './App.css';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container'>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
          </Routes>
      </div>
    </div>
  );
}

export default App; 