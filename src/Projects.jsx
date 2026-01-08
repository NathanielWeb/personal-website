import { useState } from 'react'
import './App.css'

import storeImage from "./assets/department-store-shop.png"

const Projects = ({ ref }) => {
    return (
        <div className='projects-section'>
            <h1 ref={ref} className='section-header'>Projects</h1>
            <div className='projects-display'>
                <div className='project-card'>
                    <a><img alt='Department Store Shop' src={storeImage} className='project-image' /></a>
                    <a><h2 className='project-title'>Department Store</h2></a>
                    <p className='project-desc'>Description...</p>
                </div>
            </div>

        </div>
    );
    
}

export default Projects