import { useState } from 'react'
import './App.css'

const Projects = ({ ref }) => {
    return (
        <div className='projects-section'>
            <h1 ref={ref}>Projects</h1>
            <div className='projects-display'>
                <div className='project-1'>
                    <a><img alt='Project #1' /></a>
                    <a><h2>Project 1</h2></a>
                    <p>Description...</p>
                </div>
                <div className='project-2'>
                    <a><img alt='Project #2' /></a>
                    <a><h2>Project 2</h2></a>
                    <p>Description...</p>
                </div>
                <div className='project-3'>
                    <a><img alt='Project #3' /></a>
                    <a><h2>Project 3</h2></a>
                    <p>Description...</p>
                </div>
                <div className='project-4'>
                    <a><img alt='Project #4' /></a>
                    <a><h2>Project 4</h2></a>
                    <p>Description...</p>
                </div>
            </div>

        </div>
    );
    
}

export default Projects