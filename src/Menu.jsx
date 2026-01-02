import { useState } from 'react'
import './App.css'

const Menu = ({ displayMenu, references }) => {
    //Make sure to implicity return the list element so that it renders
    return (
        <aside className={displayMenu ? "show-menu" : "hide-menu"}>
            <div className="scroll-options-menu">
                <ul>
                    {references.map((item) => 
                        <li key={item.key}>
                            <button className="scroll-button" onClick={() => {
                                if(item.ref.current) { //check if the element at the reference is rendered
                                    item.ref.current.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>{item.name}</button>
                        </li>
                    )}
                </ul>
            </div>
            <div></div>
        </aside>
    );
}

export default Menu