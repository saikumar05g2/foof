import Link from "next/link";
import React from "react";
import "./header.css";

const header = () => {
  return (
    <div className="header">
      <h1>Food</h1>
      <div className="right-header">
        <Link href="/register">Register</Link> {" "}
        <Link href="/about">About</Link>{" "}
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default header;
