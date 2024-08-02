import { GrInstagram } from "react-icons/gr";

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="header-top-content" id="header-top-content">
        <p>
          Mon - Sam 8.00 - 17.00 Sonntag <span id="closed">GESCHLOSSEN</span>
        </p>
        <p id="phone">
          Kontaktiere uns: <span id="phone">+49 17684560147</span>
        </p>
        <a
          href="https://www.instagram.com/asn_gebaeudemanagement/"
          target="_blank"
          rel="noreferrer"
        >
          <GrInstagram id="instagram" />
        </a>
      </div>
    </div>
  );
}
