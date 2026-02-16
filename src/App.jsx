import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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
import PageNotFound from "./pages/PageNotFound";

function App() {
  const location = useLocation();

  // List of valid paths
  const validPaths = [
    "/",
    "/über-uns",
    "/dienstleistungen",
    "/kontakt",
    "/impressum",
    "/datenschutzerklärung",
  ];

  // Check if the current path is one of the valid paths
  const isNotFoundPage = !validPaths.includes(
    decodeURIComponent(location.pathname)
  );

  return (
    <>
      {!isNotFoundPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/über-uns" element={<About />} />
        <Route path="/dienstleistungen" element={<Services />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/impressum" element={<Imprint />} />
        <Route path="/datenschutzerklärung" element={<Privacy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {!isNotFoundPage && <Footer />}
    </>
  );
}

export default function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
