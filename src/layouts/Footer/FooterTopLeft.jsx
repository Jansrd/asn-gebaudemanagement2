import { Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";

export default function FooterTopLeft() {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer-top-left" id="footer-top-left">
      <div className="footer-top-left-top" id="footer-top-left-top">
        <h2>ASN Gebäudemanagement</h2>
        <h5>ihr partner rund um gebaude und garten.</h5>
        <div className="footer-btns">
          <a
            rel="noreferrer"
            href="https://www.google.com/maps/place/Eckstra%C3%9Fe+7,+89250+Senden,+Germany/@48.3273409,10.0266518,17z/data=!3m1!4b1!4m6!3m5!1s0x479960f39c166e1b:0xb005c6235cb46f6a!8m2!3d48.3273374!4d10.0292267!16s%2Fg%2F11c24t_m6z?entry=ttu"
            target="_blank"
          >
            <button>Ulm, Germany </button>
          </a>
          <Link to="/kontakt" onClick={scrollUp}>
            <button>Kontaktiere uns</button>
          </Link>
        </div>
      </div>
      <div className="footer-top-left-bottom">
        <p>Verbinde dich mit uns:</p>
        {/*<a href=""><FaFacebookSquare id='facebook' /></a> */}
        <a
          href="https://www.instagram.com/asn_gebaeudemanagement/"
          target="_blank"
          rel="noreferrer"
        >
          <GrInstagram id="instagram-footer" />
        </a>
        {/* <a href=""><FaLinkedin id='linkedin' /></a>*/}
      </div>
    </div>
  );
}
