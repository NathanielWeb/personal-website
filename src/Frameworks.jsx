import { useState } from 'react'
import './App.css'

const Frameworks = ({ ref }) => {
    return (
        <div className="frameworks-section">
          <h1 ref={ref} className='section-header' >Frameworks</h1>
         <div className="frameworks-display">
            <abbr title="ReactJS"><i className="devicon-react-original-wordmark"></i></abbr>
            <abbr title="TailwindCSS"><i class="devicon-tailwindcss-plain-wordmark"></i></abbr>
          </div>
        </div>
    );
    
}

export default Frameworks