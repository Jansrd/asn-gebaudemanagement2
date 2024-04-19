import React from 'react'
import '../style/ContactComponent.css'

const ContactComponent = ({ icon, text1, text2, color }) => {
    return (
        <div className="contact__component">
            <div className="contact__component__left">
                <p id='contact__component__icon'>{icon}</p>
            </div>
            <div className="contact__component__right">
                <div className="contact__component__right__top">
                    <h3>{text1}</h3>
                </div>
                <div className="contact__component__right__bottom">
                    <h5 style={{ color: color }}>{text2}</h5>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent