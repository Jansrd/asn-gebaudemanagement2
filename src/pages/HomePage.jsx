import React, { useRef, useState } from 'react'
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
import emailjs from '@emailjs/browser';

const HomePage = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3300,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1079,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "290px"
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "260px"
                }
            },
            {
                breakpoint: 985,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "230px"
                }
            },
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "200px"
                }
            },
            {
                breakpoint: 835,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "170px"
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "175px"
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "100px"
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "90px"
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "80px"
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "70px"
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "60px"
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "50px"
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "40px"
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "30px"
                }
            },
            {
                breakpoint: 410,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "30px"
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "20px"
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    "centerPadding": "10px"
                }
            },

        ]
    };

    const form = useRef()
    const [check, setCheck] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        if (check === true) {
            emailjs
                .sendForm('service_yjdhi6n', 'template_pbhl5qa', form.current, {
                    publicKey: 'zbBbwVR3R-ED_J2Q7',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
            e.target.reset()
            alert("Nachricht wurde gesendet")
        } else {
            alert("Pin Ich habe die Datenschutzerklärung gelesen und werde es erneut versuchen! Danke schön.")
        }
        setCheck(false)
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
                            <Link
                                to="home_service"
                                spy={true}
                                smooth={true}
                                offset={-260}
                                duration={600}>
                                <button><IoMdArrowDown /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="home__page__service">
                    <div className="home__page__service__top">
                        <h1 id='home_service'>Dienstleistungen</h1>
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
                <div className="home__page__about">
                    <div className="home__page__about__left">
                        <h1>Warum wir?</h1>
                        <p id='services__subtitle'>Entdecken Sie, was uns zu Ihrem idealen Partner macht.</p>
                    </div>
                    <div className="home__page__about__middle">
                        <div className="vertical__line2"></div>
                    </div>

                    <div className="home__page__about__right">
                        <p>ASN-Gebäudemanagement steht für höchste Standards und erstklassigen Service. Wir sind ein
                            eingetragener Betrieb und setzen auf modernste, umwelt- und materialschonende Reiniger für
                            eine hochwertige Reinigung auf höchstem Niveau. Unser Anspruch an uns selbst ist es, hoch
                            qualitative und verlässliche Gebäudereinigung und Haushaltshilfe zu leisten um Ihren
                            Ansprüchen mehr als zu genügen!<span><a href='/über-uns'> mehr lesen..</a></span>
                        </p>
                    </div>
                </div>
                <div className="home__page__contact">
                    <div className="home__page__contact__top">
                        <h1>Kontaktiere uns</h1>
                        <p id='services__subtitle'>Kontaktieren sie uns und wir werden uns bald bei ihnen melden.</p>
                    </div>
                    <div className="home__page__contact__middle">
                        <iframe
                            title='maps'
                            width="100%"
                            height="550"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Eckstra%C3%9Fe%207%2089250%20Senden+(ASN%20Geb%C3%A4udemanagement)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.gps.ie/">gps tracker sport</a>
                        </iframe>
                    </div>
                    <div className="home__page__contact__bottom">
                        <form ref={form} className='form' onSubmit={sendEmail}>
                            <div className="form__content">
                                <div className="form__top">
                                    <input id='input__name' type='text' placeholder='Name' name='user_name' required />
                                    <input type='email' placeholder='E-mail-adresse' name='user_email' required />
                                </div>
                                <div className="form__middle">
                                    <textarea className='textarea' type='text' placeholder='Nachricht' name='message' required />
                                </div>
                                <div className="form__bottom">
                                    <div className="checkbox">
                                        <input type="checkbox" checked={check} onChange={() => setCheck(!check)} />
                                        <p>Ich habe die datenschutzerklarung zur kenntnis genommen.</p>
                                    </div>
                                    <button type='submit' className='send__btn'>Absenden</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage