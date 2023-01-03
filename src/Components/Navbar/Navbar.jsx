import React from 'react'
import  "./navbar.css"
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const state = useSelector((state)=>state.handleCart)
  return (
    <div className='NavbarContainer'>
 
        <div className='NavbarLogo'>
            <img src="/Assets/logo.png" className='NavbarLogoImg' alt="" />
            <h1 className="NavbarLogoText">Shopping Line</h1>
        </div>

        <div className='NavbarPage'>
            <ul className="NavBarPageLists">
                <li className="NavbarPageList">
                    
                    <NavLink to="/" className='Navbarlink'><i className="fa-solid fa-house"></i>Home</NavLink>
                </li>
                <li className="NavbarPageList">
                   
                    <NavLink to="/products" className='Navbarlink'><i className="fa-solid fa-box-open"></i>Product</NavLink>
                </li>
                <li className="NavbarPageList">
                    
                    <NavLink to="/about" className='Navbarlink'><i className="fa-solid fa-address-card"></i>About</NavLink>
                </li>
                <li className="NavbarPageList">
                    
                    <NavLink to="/contact" className='Navbarlink'><i className="fa-solid fa-phone"></i>Contact</NavLink>
                </li>
            </ul>
        </div>

        <div className='NavrbarButtons'>

            <NavLink to="/login" className='NavbarLoginButton'><i className="fa-solid fa-arrow-right-to-bracket"></i>Login</NavLink>

            <NavLink to="/register" className='NavbarLoginButton'><i className="fa-solid fa-user-plus"></i>Register</NavLink>

            <NavLink to="/cart" className='NavbarLoginButton'><i className="fa-solid fa-cart-shopping"></i>Cart ({state.length})</NavLink>

        </div>

    </div>
  )
}
