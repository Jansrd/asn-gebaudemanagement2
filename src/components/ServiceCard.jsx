import React from 'react'
import '../style/ServiceCard.css'
import { LiaBroomSolid } from "react-icons/lia";

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="service__card">
            <div className="service__card__top">
                <p>{icon}</p>
            </div>
            <div className="service__card__bottom">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard