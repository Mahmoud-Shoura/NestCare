import "./CompanyServices.css"; // قم بإنشاء هذا الملف لتنسيق المكون

import CompanyOverview from "./CompanyOverview"; // استيراد المكون الفرعي لنبذة عن الشركة

const About = () => {
  return (
    <section className="company-services" id="company-services">
      <h2>خَدماتُنا للرعاية والتمريض</h2>
      <CompanyOverview />
    </section>
  );
};

export default About;
