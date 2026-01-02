import { useState } from 'react'
import './App.css'

const Header = ({ name }) => {
    return (
        <div className="header-container">
            <h1>{name}</h1>
        </div>
    );
}

export default Header