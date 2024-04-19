import React, { useRef } from 'react'
import '../style/HomePage.css'
import asn_logo_home_page from '../images/asn_logo_promo.png'
import { IoMdArrowDown } from "react-icons/io";
import ServiceCard from '../components/ServiceCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LuConstruction } from "react-icons/lu";
import { MdConstruction } from "react-icons/md";
import { TbWindow } from "react-icons/tb";
import { PiWarehouse } from "react-icons/pi";
import { FaSwimmingPool } from "react-icons/fa";
import { GiHighGrass } from "react-icons/gi";
import { FaSnowplow } from "react-icons/fa";
import { LiaBroomSolid } from "react-icons/lia";
import { MdOutlineCleaningServices } from "react-icons/md";
import { Link } from 'react-scroll';

const HomePage = () => {



    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <div className="home__page">
            <div className="home__page__content">
                <div className="home__page__start">
                    <div className="home__page__start__left">
                        <img src={asn_logo_home_page} alt="" />
                    </div>
                    <div className="vertical__line"></div>
                    <div className="home__page__start__right">
                        <div className="home__page__start__right__top">
                            <h2>ASN Gebäudemanagement</h2>
                            <p>ihr partner rund um gebaude und garten.</p>
                        </div>
                        <div className="home__page__start__right__bottom">
                            <Link to="test1" spy={true} smooth={true} offset={-260} duration={800}><button><IoMdArrowDown /></button></Link>
                        </div>
                    </div>
                </div>
                <div className="home__page__service">
                    <div className="home__page__service__top">
                        <h1 id='test1'>Dienstleistungen</h1>
                        <p id='home__page__services__subtitle'>Erfahren Sie mehr über unsere Angebote und Leistungen.</p>
                    </div>
                    <div className="home__page__service__bottom">
                        <Slider {...settings}>
                            <div>
                                <ServiceCard
                                    icon={<LiaBroomSolid />}
                                    title="Unterhaltsreinigung"
                                    description="Ob Privatobjekt oder Gewerbe unsere
                                    Unterhaltsreinigung sorgt dafÜr, dass die 
                                    Innenflachen immer sauber sind."
                                />
                            </div>
                            <div>
                                <ServiceCard
                                    icon={<MdOutlineCleaningServices />}
                                    title="Grundreinigung"
                                    description="Die Grundreinigung beginnt am  Ende der allgemeinen
                                Unterhaltsreinigung. Hier entfernen wir hartnackige
                                Verschmutzungen und erneuern den Aushärtefilm für 
                                Ihre Bodenbeläge."
                                />
                            </div>
                            <div>
                                <ServiceCard
                                    icon={<LuConstruction />}
                                    title="Baureiningung"
                                    description="Ob Privatobjekt oder Gewerbe unsere
                                Unterhaltsreinigung sorgt dafÜr, dass die 
                                Innenflachen immer sauber sind."
                                />
                            </div>
                            <div>
                                <ServiceCard
                                    icon={<TbWindow />}
                                    title="Glasreinigung"
                                    description="Unser professionelles Team ist geschult und ausgerüstet, 
                                um alle Fensterkonstruktionen zuverlässig zu reinigen. 
                                Mit oder ohne Aufstiegshilfen, doppelt oder vierfach verglaste 
                                Fenster, Deckenleuchten oder Glasdächer – wir garantieren
                                freie Sicht."
                                />
                            </div>
                            <div>
                                <ServiceCard
                                    icon={<PiWarehouse />}
                                    title="Fassadenreinigung"
                                    description="Eine Fassade ist die Visitenkarte einer Immobilie.
                                Zahlreiche Umwelteinflüsse wie Regen, Sonne, Staub oder 
                                Schmutz aus dem Straßenverkehr hinterlassen ihre Spuren. 
                                Mit unserer Fassadenreinigung zeigen sich Fassaden wieder
                                von ihrer besten Seite."
                                />
                            </div>
                            <div>
                                <ServiceCard
                                    icon={<FaSwimmingPool />}
                                    title="Sonderrinigung"
                                    description="Zur Sonderreinigung gehört alles, was über
                                    die normale Reinigung hinausgeht – dazu 
                                    gehören besonders hartnäckige Verschmutzungen,
                                    schwer zugängliche Stellen und ein deutlich erhöhter
                                    Arbeitsaufwand."
                                />
                            </div>
                            <div>
                                <ServiceCard
                                    icon={<GiHighGrass />}
                                    title="Gartenpflege"
                                    description="Wir bieten eine breite Palette von Gartenpflege-Leistungen an,
                                    die von professionellen Gärtnern sorgfältig ausgeführt werden,
                                    um sicherzustellen, dass Ihr Garten immer gut aussieht."
                                />
                            </div>
                            <div>
                                <ServiceCard
                                    icon={<MdConstruction />}
                                    title="Hausmeister"
                                    description="Sie profitieren von einem persönlichen Betreuungsservice,
                                    der sich um die Pflege, Wartung und Kontrolle Ihrer Immobilie
                                    kümmert."
                                />
                            </div>
                            <div>
                                <ServiceCard
                                    icon={<FaSnowplow />}
                                    title="Winterdienst"
                                    description="Unser Winterdienst ist 24 Stunden am Tag, 7 Tage
                                    die Woche immer für Sie da und sorgt für Verkehrssicherheit."
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage