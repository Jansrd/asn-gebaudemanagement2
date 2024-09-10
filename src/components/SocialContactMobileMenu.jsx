import SocialNetwork from "./SocialNetwork";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

function SocialContactMobileMenu() {
  return (
    <div className="social-contact">
      <SocialNetwork
        link="https://www.instagram.com/asn_gebaeudemanagement/"
        icon={<GrInstagram />}
        iconColor="rgb(193, 53, 132)"
      />
      <SocialNetwork
        link="https://www.facebook.com/profile.php?id=61561726511044"
        icon={<FaFacebookSquare />}
        iconColor="rgb(24, 119, 242)"
        iconSize="17px"
      />
      <SocialNetwork
        link="https://wa.me/4917684560147"
        icon={<FaSquareWhatsapp />}
        iconColor="rgb(37, 211, 102)"
        iconSize="17px"
      />
    </div>
  );
}

export default SocialContactMobileMenu;
