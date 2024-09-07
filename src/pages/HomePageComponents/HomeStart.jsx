import asn_logo_home from "../../assets/images/asn_logo_promo.png";
import { IoMdArrowDown } from "react-icons/io";

export default function HomeStart() {
  function homeScroll() {
    var scrollToServices =
      document.getElementById("home-service-title").offsetTop;
    if (window.innerWidth < 661) {
      window.scrollTo({ top: scrollToServices - 200, behavior: "smooth" });
    } else {
      window.scrollTo({ top: scrollToServices - 260, behavior: "smooth" });
    }
  }

  /*260 */

  return (
    <div className="home-content-start" id="home-content-start">
      <div className="home-content-start-left" id="home-content-start-left">
        <img src={asn_logo_home} alt="asn home" />
        <h2></h2>
      </div>
      <div className="vertical-line" id="vertical-line"></div>
      <div className="home-content-start-right" id="home-content-start-right">
        <div
          className="home-content-start-right-top"
          id="home-content-start-right-top"
        >
          <h2>ASN Gebäudemanagement</h2>
          <p>Ihr Partner rund um Gebäude und Garten!</p>
        </div>
        <div className="home-content-start-right-bottom">
          <button onClick={homeScroll}>
            <IoMdArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
}
