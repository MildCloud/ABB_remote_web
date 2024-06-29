import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../index.css";
import logo from "../ABB_logo.png";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="nav-menu">
            <ul className="nav-menu-items">
                <img src={logo} className="logoImage"/>
                {SidebarData.map((item, index) => {
                    return (
                    <li key={index} className={item.cName}>
                        <Link className={location.pathname === item.path ? 'navActive' : ''} to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                        </Link>
                    </li>
                    );
                })}
                <div className="sideBarFoot">
                    <h4>
                        ABB - Remote Control and Monitoring Solution for Robots.
                    </h4>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;