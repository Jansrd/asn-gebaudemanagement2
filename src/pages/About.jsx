import React from 'react'
import '../style/About.css'
import AboutComponent from '../components/AboutComponent'
import { PiBroom } from "react-icons/pi";
import { LiaSprayCanSolid } from "react-icons/lia";
import { BiMedal } from "react-icons/bi";

const About = () => {
    return (
        <div className="about">
            <div className="about__content">
                <h1>Warum wir?</h1>
                <p id='services__subtitle'>Entdecken Sie, was uns zu Ihrem idealen Partner macht.</p>
                <div className="about__top">
                    <AboutComponent
                        icon={<PiBroom />}
                        title="Professionelle Reinigungskräfte"
                    />
                    <AboutComponent
                        icon={<LiaSprayCanSolid />}
                        title="Umweltbewusste Reinigung"
                    />
                    <AboutComponent
                        icon={<BiMedal />}
                        title="Zufriedenheit garantiert"
                    />
                </div>
                <div className="about__bottom">
                    <p>ASN-Gebäudemanagement steht für höchste Standards und erstklassigen Service. Wir sind ein
                        eingetragener Betrieb und setzen auf modernste, umwelt- und materialschonende Reiniger für
                        eine hochwertige Reinigung auf höchstem Niveau. Unser Anspruch an uns selbst ist es, hoch
                        qualitative und verlässliche Gebäudereinigung und Haushaltshilfe zu leisten um Ihren
                        Ansprüchen mehr als zu genügen! Wir sind stolz sagen zu können, dass wir unsere Kunden in
                        Ulm oder darüber hinaus immer überzeugen können. Deshalb wollen wir uns immer wieder neue
                        Maßstäbe setzen um die Gebäudeunterhaltung noch effektiver gestalten zu können.</p>
                </div>
            </div>
        </div>
    )
}

export default About