import React from 'react'
import '../style/Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

    const scrollUp = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <div className="footer__line">

            </div>
            <div className="footer">
                <div className="footer__content">

                    <div className="footer__top">
                        <div className="footer__top__left">
                            <div className="footer__top__left__top">
                                <h2>ASN Gebäudemanagement</h2>
                                <h5>ihr partner rund um gebaude und garten.</h5>
                                <div className="footer__btns">
                                    <a rel='noreferrer' href='https://www.google.com/maps/place/Eckstra%C3%9Fe+7,+89250+Senden,+Germany/@48.3273409,10.0266518,17z/data=!3m1!4b1!4m6!3m5!1s0x479960f39c166e1b:0xb005c6235cb46f6a!8m2!3d48.3273374!4d10.0292267!16s%2Fg%2F11c24t_m6z?entry=ttu' target='_blank'>
                                        <button>Ulm, Germany </button>
                                    </a>
                                    <Link to="/kontakt"><button onClick={scrollUp}>Kontaktiere uns</button></Link>
                                </div>

                            </div>
                            <div className="footer__top__left__bottom">
                                <p>Verbinde dich mit uns:</p>
                                <div className="header__top__stay__conected__footer">
                                    <FaFacebookSquare id='facebook' />
                                    <GrInstagram id='instagram' />
                                    <FaLinkedin id='linkedin' />
                                </div>
                            </div>
                        </div>
                        <div className="footer__top__right">
                            <div className="footer__top__right__right">
                                <h3>Deinstleistungen</h3>
                                <ul>
                                    <li><Link>Unterhaltsreinigung</Link></li>
                                    <li><Link>Grundreinigung</Link></li>
                                    <li><Link>Baureinigung</Link></li>
                                    <li><Link>Glasreinigung</Link></li>
                                    <li><Link>Fassadenreinigung</Link></li>
                                    <li><Link>Hausemeister</Link></li>
                                    <li><Link>Gartenpflege</Link></li>
                                    <li><Link>Sonderreinigung</Link></li>
                                    <li><Link>Winterdienst</Link></li>
                                </ul>
                            </div>
                            <div className="footer__top__right__left">
                                <h3>Über uns</h3>
                                <p>ASN-Gebäudemanagement steht für höchste Standards
                                    und erstklassigen Service. Wir sind ein eingetragener
                                    Betrieb und setzen auf modernste, umwelt- und
                                    materialschonende Reiniger für eine hochwertige
                                    Reinigung auf höchstem Niveau.</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__bottom__content">
                            <div className="footer__bottom__top">
                                <Link to="/impressum" rel='noreferrer' onClick={scrollUp}>Impressum</Link>
                                <div className="vh"></div>
                                <Link to="/datenschutzerklärung" rel='noreferrer' onClick={scrollUp}>Datenschutzerklärung</Link>
                            </div>
                            <div className="footer__bottom__bottom">
                                <p>Copyright&copy; 2024 ASN Gebäudemanagement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer