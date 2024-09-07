import { GrInstagram } from "react-icons/gr";

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="header-top-content" id="header-top-content">
        <p id="mon-sam">
          Mo - Sa 8:00 - 17:00 Sonntag <span id="closed">GESCHLOSSEN</span>
        </p>
        <p id="phone">
          Kontaktiere uns: <span id="phone-num">+49 17684560147</span>
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
