import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  const [stiky, setStiky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStiky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${stiky ? "dark-nav" : ""}`}>
      <div className="navbar-container">
        <img src={logo} alt="NestCare Logo" className="logo" />
        <a href="#hero" className="brand">
          NestCare | بيت الرعاية
        </a>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#hero" onClick={toggleMenu}>
              الصفحة الرئيسية
            </a>
          </li>
          <li>
            <a href="#programs" onClick={toggleMenu}>
              خَدماتُنا
            </a>
          </li>
          <li>
            <a href="#company-services" onClick={toggleMenu}>
              من نحن
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu} className="btn">
              للطلب و التواصل
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
