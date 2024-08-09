import ServiceCard from "../../components/ServiceCard";
import { services } from "../../services";
import Title from "../../components/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeService() {
  return (
    <div className="home-service">
      <div className="home-service-top" id="home-service-title">
        <Title
          title="Dienstleistungen"
          subtitle="Erfahren Sie mehr über unsere Angebote und Leistungen."
        />
      </div>
      <div className="home-service-bottom" id="home-service-bottom">
        <div className="services-home" id="services-home">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              text={service.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
