import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "12px",
    backgroundColor: "#282c34",
    color: "#fff",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
};

export default Footer;