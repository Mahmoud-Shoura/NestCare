import "./Navbar.css";
import logo from "../../assets/logo1.png";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [stiky, setStiky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setStiky(true) : setStiky(false);
    });
  }, []);

  return (
    <nav className={`container ${stiky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <a href="#">NestCare | بيت الرعاية</a>
      <ul>
        <li>الصفحة الرئيسية</li>
        <li>خَدماتُنا</li>
        <li>من نحن</li>
        <li>
          {" "}
          <button className="btn">للطلب و التواصل</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
