// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Portfolio from './portfolio';
import Contact from './contact';
import Footer from './Footer';
import './styles.css';

const App = () => (
  <Router>
    <div className="app-container">
      <header>
        <Navigation />
        <img src = { require('./my-profile.png') } 
        alt=""
         />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </Router>
);

export default App;