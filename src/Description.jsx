import { useState } from 'react'
import './App.css'

const Description = ({ description, ref }) => {
    return (
        <div className="descript-section">
            <img src="src\profile-picture.jpg" alt="Picture of myself" className="personal-picture"/>
            <div className="descript-container" ref={ref}>
                <p className="text-2xl">{description}</p>
            </div>
        </div>
    );
}

export default Description