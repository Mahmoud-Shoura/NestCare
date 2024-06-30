import "./Navbar.css";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  return (
    <nav className="container">
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
