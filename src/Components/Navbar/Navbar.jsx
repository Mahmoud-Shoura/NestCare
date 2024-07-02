import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  const [stiky, setStiky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStiky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${stiky ? "dark-nav" : ""}`}>
      <div className="navbar-container">
        <img src={logo} alt="NestCare Logo" className="logo" />
        <a href="#" className="brand">
          NestCare | بيت الرعاية
        </a>
        <ul className="nav-links">
          <li>
            <Link to="hero" smooth={true} duration={500}>
              الصفحة الرئيسية
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} offset={-200} duration={500}>
              خَدماتُنا
            </Link>
          </li>
          <li>
            <Link
              to="company-services"
              smooth={true}
              offset={-50}
              duration={500}
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
