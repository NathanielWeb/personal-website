import { useState } from 'react'
import './App.css'

const Languages = ( {ref} ) => {
    return (
        <div className="languages-section">
          <h1 ref={ref} className="lang-title">Languages</h1>
          
          <div className="lang-web">
            <h2>Web Development</h2>
            <div className="language-logos">
              <abbr title="HTML5"><i className="devicon-html5-plain-wordmark"></i></abbr>
              <abbr title="CSS3"><i className="devicon-css3-plain-wordmark"></i></abbr>
              <abbr title="JavaScript"><i className="devicon-javascript-plain"></i></abbr>
              <abbr title="ReactJS"><i className="devicon-react-original-wordmark"></i></abbr>
            </div>
          </div>

          <div className="lang-general">
            <h2>General</h2>
            <div className="language-logos">
              <abbr title="Python"><i className="devicon-python-plain-wordmark"></i></abbr>
              <abbr title="Java"><i className="devicon-java-plain-wordmark"></i></abbr>
              <abbr title="C"><i className="devicon-c-plain-wordmark"></i></abbr>
            </div>
          </div>

          <div className="lang-framework">
            <h2>Frameworks</h2>
            <div className="language-logos">
              <abbr title="ReactJS"><i className="devicon-react-original-wordmark"></i></abbr>
              <abbr title="TailwindCSS"><i class="devicon-tailwindcss-plain-wordmark"></i></abbr>
            </div>
          </div>
          




        </div>
    );   
}

export default Languages