import { services } from "../../services";
import FooterServices from "../../components/FooterServices";

export default function FooterTopRight() {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer-top-right" id="footer-top-right">
      <div className="footer-top-right-left">
        <h3>Dienstleistungen</h3>
        <ul>
          {services.map((service) => (
            <FooterServices
              key={service.id}
              title={service.title}
              onScroll={scrollUp}
            />
          ))}
        </ul>
      </div>
      <div className="footer-top-right-left">
        <h3>Über uns</h3>
        <p id="uber-uns-text">
          ASN-Gebäudemanagement steht für höchste Standards und erstklassigen
          Service. Wir sind ein eingetragener Betrieb und setzen auf modernste,
          umwelt- und materialschonende Reiniger für eine hochwertige Reinigung
          auf höchstem Niveau.
        </p>
      </div>
    </div>
  );
}
