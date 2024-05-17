'use client'
import Link from "next/link";
import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <Link href="/" className="header-name">Food</Link>
      <div className={`right-header ${isOpen ? "open" : ""}`}>
        <Link href="/register">Register</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <div className="close-icon">✖</div> : "☰"}
      </div>
    </div>
  );
};

export default Header;