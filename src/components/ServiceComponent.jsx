import React from 'react'
import '../style/ServiceComponent.css'

const ServiceComponent = ({ icon, title, description }) => {
    return (
        <div className="service__component">
            <div className="service__component__top">
                <p id='icon'>{icon}</p>
            </div>
            <div className="service__component__bottom">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ServiceComponent
