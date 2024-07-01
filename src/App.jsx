import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Title from "./Components/Title/Title";
import Programs from "./Components/Programs/Programs";
import CompanyServices from "./Components/CompanyServices/CompanyServices";
import Contact from "./Contact/Contact";
import { Footer } from "./Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle="خَدماتُنا" title="ما نقدمه من خدمات" />
      <Programs />
      <CompanyServices />
      <Title subTitle="لطلب الخدمة و التواصل" title="يُسعدنا الرد علي رسائلك" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
