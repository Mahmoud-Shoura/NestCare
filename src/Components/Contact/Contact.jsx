import { useState } from "react";
import "./Contact.css";
import msgIcon from "../../assets/msg-icon.png";
import phoneIcon from "../../assets/phone-icon.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("جار الارسال");
    const formData = new FormData(event.target);

    formData.append("access_key", "216485f7-1d79-424f-884d-1d3ffe98bb78");

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
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          لطلب الخدمة و التواصل <img src={msgIcon} alt="Message Icon" />
        </h3>
        <p>
          إذا كان لديكم أي استفسار أو تحتاجون إلى المزيد من المعلومات، لا
          تترددوا في التواصل معنا.
        </p>
        <ul>
          <li>
            <img src={phoneIcon} alt="Phone Icon" /> +20 111 071 2377
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
