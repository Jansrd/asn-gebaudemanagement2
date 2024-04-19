import React, { useRef } from 'react'
import '../style/HomePage.css'
import asn_logo_home_page from '../images/asn_logo_promo.png'
import { IoMdArrowDown } from "react-icons/io";

const HomePage = () => {

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
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
                            <button><IoMdArrowDown /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage