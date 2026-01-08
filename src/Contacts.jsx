import { useState } from 'react'
import './App.css'

const Contacts = ({ ref }) => {
    return (
        <div className='contacts-section'>
            <h1 ref={ref} className='section-header' >Contact Me</h1>
            <p>Email: <a className="email-link" href="mailto:nathanielweb@yahoo.com">nathanielweb@yahoo.com</a></p>
            <a  className="linkedin-link" href="www.linkedin.com/in/nathaniel-j-webster" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        
    );
}

export default Contacts