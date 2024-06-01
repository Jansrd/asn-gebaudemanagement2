import React from 'react'
import '../style/Contact.css'
import ContactComponent from '../components/ContactComponent'
import { MdOutlineLocationOn } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FiClock } from "react-icons/fi";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__content">
                <h1>Kontaktiere uns</h1>
                <p id="contact__subtitle">Kontaktieren sie uns und wir werden uns bald bei ihnen melden.</p>
                <div className="contact__us">
                    <a rel='noreferrer' href='https://www.google.com/maps/place/Eckstra%C3%9Fe+7,+89250+Senden,+Germany/@48.3273409,10.0266518,17z/data=!3m1!4b1!4m6!3m5!1s0x479960f39c166e1b:0xb005c6235cb46f6a!8m2!3d48.3273374!4d10.0292267!16s%2Fg%2F11c24t_m6z?entry=ttu' target='_blank'>
                        <ContactComponent
                            icon={<MdOutlineLocationOn />}
                            text1="ASN Gebäudemanagement,"
                            text2="Eckstraße 7 89250 Senden"
                        />
                    </a>
                    <ContactComponent
                        icon={<MdPhoneIphone />}
                        text1="+49 17684560147"
                    />
                    <ContactComponent
                        icon={<MdMailOutline />}
                        text1="info@asn-ulm.de"
                    />

                </div>
                <div className="contact__us__row__2">
                    <ContactComponent
                        icon={<FiClock />}
                        text1="Mon - Sam 8.00 - 17.00 Uhr"
                        text2="Sonntag GESCHLOSSEN"
                        color="red"
                    />
                </div>


            </div>
        </div>
    )
}

export default Contact