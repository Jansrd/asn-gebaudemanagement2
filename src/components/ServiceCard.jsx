import React from 'react'
import '../style/ServiceCard.css'
import { Link } from 'react-router-dom'

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="service__card">
            <Link to='/dienstleistungen'>
                <div className="service__card__top">
                    <p>{icon}</p>
                </div>
                <div className="service__card__bottom">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </Link>

        </div>
    )
}

export default ServiceCard