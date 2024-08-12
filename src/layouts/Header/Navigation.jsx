import { Link } from "react-router-dom";
import { routes } from "../../routes";

export default function Navigation() {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <ul className="navigation" id="navigation">
      {routes.map((route) => (
        <li key={route.id}>
          <Link to={route.to} onClick={scrollUp}>
            {route.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
