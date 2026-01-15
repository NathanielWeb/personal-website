import { useState } from 'react'
import profilePic from './assets/profile-picture.jpg'
import './App.css'

const Description = ({ description, ref }) => {
    return (
        <div className="descript-section">
            <img src={profilePic} alt="Picture of myself" className="personal-picture"/>
            <div className="descript-container scroll-target" ref={ref}>
                <p className="text-2xl">{description}</p>
            </div>
        </div>
    );
}

export default Description