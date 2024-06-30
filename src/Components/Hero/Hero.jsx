import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          مرحباً بكم في بيت الرعاية، الوجهة المثالية لتلبية جميع احتياجاتكم
          المنزلية
        </h1>
        <p>
          سواء كنتم تبحثون عن رعاية صحية منزلية مميزة، أو عاملات نظافة محترفات،
          نحن هنا لنقدم لكم أفضل الخدمات بجودة عالية وموثوقه. راحتكم هي
          أولويتنا، دعونا نهتم بكم وبمنزلكم
        </p>
        <button className="btn">
          للطلب و التواصل <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
