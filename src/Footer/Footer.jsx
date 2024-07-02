import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <p>
        © 2024 دار الرعاية. جميع الحقوق محفوظة
        <br />
        <a
          href="https://mhs.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MHS
        </a>
      </p>
      <ul>
        <li>شروط الخدمة</li>
        <li>سياسة الخصوصية</li>
      </ul>
    </div>
  );
};
