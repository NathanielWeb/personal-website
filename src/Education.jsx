import { useState } from 'react'
import './App.css'

const Education = ({ ref }) => {
    return (
        <div className="education-section">
            <h1 ref={ref} className='section-header' >Education</h1>
            <h2>University of Toronto, Mississauga</h2>
            <p>September 2023 - Present</p>
        </div>
    )
}


export default Education