import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Description from './Description.jsx'
import Languages from './Languages.jsx'
import Frameworks from './Frameworks.jsx'
import Courses from './Courses.jsx'
import Projects from './Projects.jsx'
import Education from './Education.jsx'
import Menu from './Menu.jsx'
import Contacts from './Contacts.jsx'
// import { references, descriptionRef, languagesRef, coursesRef, contactRef } from './references.js'



const App = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const name = "Nathaniel Webster";
  const description = "Hey, my name is Nathaniel Webster! I am a UofT student studying Computer Science in the class of 2027. Coding is one of my hobbies and passions, which is why I was thrilled when I had the opportunity to study a coding-related field for my post-secondary studies. Throughout my studies at UofT, I have learned many core coding concepts. This includes subjects such as Object-Oriented Programming, Data Structures, Design Patterns, and Runtime Analysis. Outside of my studies at UofT, I have taken the time to learn coding concepts that are essential in the industry. One of them in particular is web development, in which I took the time to become proficient in HTML, CSS, JavaScript, and ReactJS. All of which were used to design this website. I am always open to learning new coding concepts and anything else related to coding.";

   const descriptionRef = useRef(null);
   const languagesRef = useRef(null);
   const frameworksRef = useRef(null);
   const projectsRef = useRef(null);
   const coursesRef = useRef(null);
   const contactRef = useRef(null);
   const educationRef = useRef(null);

   const references = [
      {
          name: "Bio",
          key: "description",
          ref: descriptionRef
      },
      {
          name: "Projects",
          key: "projects",
          ref: projectsRef
      },
      {
          name: "Languages Learned",
          key: "languages",
          ref: languagesRef
      },
      {
          name: "Education",
          key: "education",
          ref: educationRef
      },
      {
          name: "Courses",
          key: "courses",
          ref: coursesRef
      },
      {
          name: "Contact Me",
          key: "contact",
          ref: contactRef
      }

  ];


  return (
    <main className={displayMenu ? "two-col-website" : "one-col-website"}>
      <nav>
        <button className="menu-button" onClick={() => setDisplayMenu(!displayMenu)}><i class="fa-solid fa-bars"></i> Menu</button>
      </nav>
      
      <Header name={name} />
      <Menu displayMenu={displayMenu} references={references}/>
      <div className="main-content">
        
        <Description description={description} ref={descriptionRef}/>
          
        <Languages ref={languagesRef} />

        <Projects ref={projectsRef} />

        <Education ref={educationRef} />
        
        <Courses ref={coursesRef} />

        <Contacts ref={contactRef} />
        
      </div>
    </main>
  )

}

export default App
