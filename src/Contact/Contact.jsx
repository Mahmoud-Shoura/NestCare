import React from "react";
import "./Contact.css";
import msg_icon from "../assets/msg-icon.png";
import phone_icon from "../assets/phone-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("جار الارسال");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("تم الارسال");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>الاسم</label>
          <input type="text" name="name" placeholder="اكتب اسمك" required />
          <label>رقم الهاتف</label>
          <input
            type="tel"
            name="phone"
            placeholder="اكتب رقم الهاتف"
            required
          />
          <label>اكتب رسالتك او طلبك</label>
          <textarea
            name="message"
            rows="6"
            placeholder="اكتب رسالتك و سيتم التواصل معك"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            ارسال
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
