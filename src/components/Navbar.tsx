import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <img src="/IMG/kw.png" className="logo" alt="Logo" />
      <ul id="sidemenu" style={{ right: menuOpen ? "0" : "-200px" }}>
        <li>
          <a href="#header" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={closeMenu}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#reviews" onClick={closeMenu}>
            Reviews
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
        <li>
          <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
        </li>
      </ul>
      <i className="fa-solid fa-bars" onClick={openMenu}></i>
    </nav>
  );
};

export default Navbar;
