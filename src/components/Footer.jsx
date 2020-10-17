import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>{year} Made with love: Tamara Harris</p>
    </footer>
  );
}

export default Footer;
