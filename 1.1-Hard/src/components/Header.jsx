import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>MyApp</h2>
      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/Account" style={styles.link}>Account</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#282c34",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  link: {
    marginLeft: "15px",
    color: "#fff",
    textDecoration: "none",
  },
};

export default Header;