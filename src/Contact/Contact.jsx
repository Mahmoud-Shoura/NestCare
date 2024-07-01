import "./Contact.css";
import msg_icon from "../assets/msg-icon.png";
import phone_icon from "../assets/phone-icon.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          لطلب الخدمة و التواصل <img src={msg_icon} alt="" />
        </h3>
        <p>
          إذا كان لديكم أي استفسار أو تحتاجون إلى المزيد من المعلومات، لا
          تترددوا في التواصل معنا.
        </p>
        <ul>
          <li>
            <img src={phone_icon} alt="" /> +20 111 071 2377
          </li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
};

export default Contact;
