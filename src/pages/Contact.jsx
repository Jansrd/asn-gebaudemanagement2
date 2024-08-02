import React from "react";
import "../assets/styles/contact.css";
import Title from "../components/Title";
import ServiceIcon from "../components/ServiceIcon";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FiClock } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content" id="contact-content">
        <Title
          title="Kontaktiere uns"
          subtitle="Kontaktieren sie uns und wir werden uns bald bei ihnen melden."
        />
        <div className="contact-content-top" id="contact-content-top">
          <a
            rel="noreferrer"
            href="https://www.google.com/maps/place/Eckstra%C3%9Fe+7,+89250+Senden,+Germany/@48.3273409,10.0266518,17z/data=!3m1!4b1!4m6!3m5!1s0x479960f39c166e1b:0xb005c6235cb46f6a!8m2!3d48.3273374!4d10.0292267!16s%2Fg%2F11c24t_m6z?entry=ttu"
            target="_blank"
          >
            <ServiceIcon
              icon={<MdOutlineLocationOn />}
              contactText="ASN Gebäudemanagement,"
              contactText2="Eckstraße 7 89250 Senden"
            />
          </a>
          <ServiceIcon icon={<MdPhoneIphone />} contactText="+49 17684560147" />
          <ServiceIcon icon={<MdMailOutline />} contactText="info@asn-ulm.de" />
        </div>
        <div className="contact-content-grid-row-2">
          <ServiceIcon
            icon={<FiClock />}
            contactText="Mon - Sam 8.00 - 17.00 Uhr"
            contactText2="Sonntag GESCHLOSSEN"
            color="red"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
