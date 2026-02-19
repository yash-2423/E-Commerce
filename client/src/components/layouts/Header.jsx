import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <h2>MyShop</h2>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/register" style={styles.link}>Register</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: "black",
    color: "white",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "white",   
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Header;
