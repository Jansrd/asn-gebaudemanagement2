import React from "react";
import "../assets/styles/services.css";
import Title from "../components/Title";
import { services } from "../services";
import ServiceIcon from "../components/ServiceIcon";

const Services = () => {
  return (
    <div className="services">
      <div className="services-content" id="services-content">
        <Title
          title="Dienstleistungen"
          subtitle="Erfahren Sie mehr über unsere Angebote und Leistungen."
        />
        <div className="services-content-top" id="services-content-top">
          {services.map((service) => (
            <ServiceIcon
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
};

export default Services;
