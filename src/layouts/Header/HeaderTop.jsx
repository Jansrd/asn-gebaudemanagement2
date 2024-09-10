import SocialContact from "../../components/SocialContact";

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
        <div className="header-social">
          <SocialContact />
        </div>
      </div>
    </div>
  );
}
