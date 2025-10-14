import "./Navbar.css";
import navLogo from "../../assets/bike-logo.png"
import { Link , NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar=()=>{
    return(
        <>
        <nav className="position-sticky sticky-top p-4 overflow-hidden ">
             <div className="d-flex container justify-content-between align-items-center ">
            <div className="navLogo">
                <img className="w-100" src={navLogo} alt="" />
            </div>
            <div className="navLinks">
                <ul className="d-flex justify-content-between align-items-center">
                    <li>
                        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""}>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq" className={({ isActive }) => isActive ? "active" : ""}>FAQ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navButtons ">
                <button type="button" className="navButton bg-main">
                    <NavLink to="/services"> <i className="fa-solid fa-bicycle"></i> Help & Service</NavLink>
                </button>
                <div className="loveList d-flex justify-content-between">
                    <NavLink className="ms-2"  to="/services"> <i className="fa-regular fa-heart"></i></NavLink>
                    <NavLink className="ms-2" to="/services"> <i class="fa-solid fa-cart-shopping"></i></NavLink>
                </div>
            </div>
            
        </div>
        </nav>
       
        </>
    )
}

export default Navbar;