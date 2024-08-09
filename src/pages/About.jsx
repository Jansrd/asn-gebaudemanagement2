import React from "react";
import "../assets/styles/about.css";
import Title from "../components/Title";
import ServiceIcon from "../components/ServiceIcon";
import { PiBroom } from "react-icons/pi";
import { LiaSprayCanSolid } from "react-icons/lia";
import { BiMedal } from "react-icons/bi";

const About = () => {
  return (
    <div className="about">
      <div className="about-content" id="about-content">
        <Title
          title="Warum wir?"
          subtitle="Entdecken Sie, was uns zu Ihrem idealen Partner macht."
        />
        <div className="about-content-top" id="about-content-top">
          <ServiceIcon
            icon={<PiBroom />}
            title="Professionelle Reinigungskräfte"
          />
          <ServiceIcon
            icon={<LiaSprayCanSolid />}
            title="Umweltbewusste Reinigung"
          />
          <ServiceIcon icon={<BiMedal />} title="Zufriedenheit Garantiert" />
        </div>
        <div className="about-content-bottom" id="about-content-bottom">
          <p>
            ASN-Gebäudemanagement steht für höchste Standards und erstklassigen
            Service. Wir sind ein eingetragener Betrieb und setzen auf
            modernste, umwelt- und materialschonende Reiniger für eine
            hochwertige Reinigung auf höchstem Niveau. Unser Anspruch an uns
            selbst ist es, hoch qualitative und verlässliche Gebäudereinigung
            und Haushaltshilfe zu leisten um Ihren Ansprüchen mehr als zu
            genügen! Wir sind stolz sagen zu können, dass wir unsere Kunden in
            Ulm oder darüber hinaus immer überzeugen können. Deshalb wollen wir
            uns immer wieder neue Maßstäbe setzen um die Gebäudeunterhaltung
            noch effektiver gestalten zu können.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
