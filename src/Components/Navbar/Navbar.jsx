import { useState, useEffect } from "react";
import { Link } from "react-scroll";
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
        <a href="#" className="brand">
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
            <Link to="hero" smooth={true} duration={500} onClick={toggleMenu}>
              الصفحة الرئيسية
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              smooth={true}
              offset={-200}
              duration={500}
              onClick={toggleMenu}
            >
              خَدماتُنا
            </Link>
          </li>
          <li>
            <Link
              to="company-services"
              smooth={true}
              offset={-50}
              duration={500}
              onClick={toggleMenu}
            >
              من نحن
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-200}
              duration={500}
              onClick={toggleMenu}
              className="btn"
            >
              للطلب و التواصل
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
