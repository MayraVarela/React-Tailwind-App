import React from "react";
import { Navbar } from "./Navbar";
import logo from '../assets/images/logo.svg'

export const Head =() => {
    return (
        <header className= "flex place-content-between items-center mb-8">
          <img src={logo} alt="logo" />
          <Navbar />
        </header>
    );
};