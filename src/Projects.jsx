import { useState } from 'react'
import './App.css'

import storeImage from "./assets/department-store-shop.png"
import cartImage from "./assets/department-store-cart.png"

const Projects = ({ ref }) => {
    return (
        <div className='projects-section'>
            <h1 ref={ref} className='section-header'>Projects</h1>
            <div className='projects-display'>
                <div className='project-card'>
                    <div className='project-images'>
                        <img alt='Department Store Shop' src={storeImage} className='project-image' />
                        <img alt='Department Store Shop' src={cartImage} className='project-image' />
                    </div>
                    <a href='https://github.com/NathanielWeb/department-store' target='_blank'><h2 className='project-title'>Department Store</h2></a>
                    <p className='project-desc'>
                        A full-stack e-commerce web application that features user authentication, products fetched from DummyJSON,
                        and the ability to add/remove products to cart and favourite databases. The backend of the application is made using Django 
                        and Django REST Framework with JWT-based authentication. The frontend of the application is used Next.js, React, and Tailwind CSS. 
                        Users can create an account using the register page which will then log them into that account. They will then be forwarded to the main shop
                        page shown above. From their users can add products to their cart to check them out, or add them to their favourite products list if they
                        like them.  
                    </p>
                </div>
            </div>

        </div>
    );
    
}

export default Projects