import React from 'react'
import '../style/AboutComponent.css'

const AboutComponent = ({ icon, title }) => {
    return (
        <div className="about__component">
            <div className="about__component__top">
                <p id='about__component__icon'>{icon}</p>
            </div>
            <div className="about__component__bottom">
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default AboutComponent