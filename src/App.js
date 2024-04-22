import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import RouterScrollToTop from './RouterScrollToTop';
import Imprint from './pages/Imprint';
import Privacy from './pages/Privacy';


function App() {
  return (
    <div className="app">
        <Router> 
            <RouterScrollToTop />
            <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/über-uns' element={<About />} />
                    <Route path="/dienstleistungen" element={<Services />} />
                    <Route path="/kontakt" element={<Contact />} />
                    <Route path="/impressum" element={<Imprint />} />
                    <Route path="/datenschutzerklärung" element={<Privacy />} />

                </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
