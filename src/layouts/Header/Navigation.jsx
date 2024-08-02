import { Link } from "react-router-dom";

export default function Navigation() {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <ul className="navigation" id="navigation">
      <li>
        <Link to="/" onClick={scrollUp}>
          Startseite
        </Link>
        <Link to="/über-uns" onClick={scrollUp}>
          Über uns
        </Link>
        <Link to="/dienstleistungen" onClick={scrollUp}>
          Dienstleistungen
        </Link>
        <Link to="/kontakt" onClick={scrollUp}>
          Kontakt
        </Link>
      </li>
    </ul>
  );
}
