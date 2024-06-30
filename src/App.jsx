import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import CompanyServices from "./Components/CompanyServices/CompanyServices";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
      <CompanyServices />
      <Contact />
    </div>
  );
};

export default App;
