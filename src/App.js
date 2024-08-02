import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import Footer from "./layouts/Footer";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/über-uns" element={<About />} />
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
