import React, { useState } from 'react'
import '../style/Header.css'
//import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
//import { FaLinkedin } from "react-icons/fa";
import asn_logo from '../images/asn_logo.png'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {

    const [headerHeight, setHeaderHeight] = useState(false);
    const [logoVisibility, setLogoVisibility] = useState('visible')
    const [clicked, setClicked] = useState(false)

    const changeHeight = () => {
        if (window.scrollY > 0) {
            setHeaderHeight(true)
            setLogoVisibility(logoVisibility => logoVisibility = 'hidden')
        } else {
            setHeaderHeight(false)
            setLogoVisibility(logoVisibility => logoVisibility = 'visible')
        }
    }

    window.addEventListener('scroll', changeHeight)

    const scrollUp = () => {
        window.scrollTo(0, 0)
    }

    const mobileScrollUp = () => {
        window.scrollTo(0, 0)
        setClicked(!clicked)
    }

    const handleClick = () => {
        setClicked(!clicked)
    }



    return (
        <div className="header" id='header'>
            <div className="header__top">
                <div className="header__top__content">
                    <p>Mon - Sam 8.00 - 17.00. Sonntag <span id='closed'>GESCHLOSSEN</span></p>
                    <p className='header__top__kontakt'>Kontaktiere uns: <span id='phone'>+49 17684560147</span></p>
                    <div className="header__top__stay__conected">
                        {/*<a href=""><FaFacebookSquare id='facebook' /></a> */}
                        <a href="https://www.instagram.com/asn_gebaeudemanagement/" target='_blank' rel="noreferrer"><GrInstagram id='instagram' /></a>
                        {/* <a href=""><FaLinkedin id='linkedin' /></a>*/} 
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <div style={{ transitionDuration: "0.2s" }} className={headerHeight ? "header__bottom__content2" : "header__bottom__content"}>
                    <img src={asn_logo} alt="" style={{ visibility: logoVisibility }} />
                    <ul className='navigation'>
                        <li><Link to="/" onClick={scrollUp}>Startseite</Link></li>
                        <li><Link to="/über-uns" onClick={scrollUp}>Über uns</Link></li>
                        <li><Link to="/dienstleistungen" onClick={scrollUp}>Dienstleistungen</Link></li>
                        <li><Link to="/kontakt" onClick={scrollUp}>Kontakt</Link></li>
                    </ul>
                    {
                        clicked ? <div className="mobile__menu">
                            <ul>
                                <li><Link to="/" onClick={mobileScrollUp}>Startseite</Link></li>
                                <li><Link to="/über-uns" onClick={mobileScrollUp}>Über uns</Link></li>
                                <li><Link to="/dienstleistungen" onClick={mobileScrollUp}>Dienstleistungen</Link></li>
                                <li><Link to="/kontakt" onClick={mobileScrollUp}>Kontakt</Link></li>
                            </ul>
                        </div> :
                            null
                    }
                    {
                        !clicked ?
                            <GiHamburgerMenu className='mobile__menu__show' onClick={handleClick} />
                            :
                            <IoCloseSharp className='mobile__menu__exit' onClick={handleClick} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Header