import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import medicalCareImage from "../../assets/pexels-kampus-7551686.jpg";
import medicalImage from "../../assets/img2.jpg";
import kitchenStaffImage from "../../assets/pexels-elletakesphotos-2696064.jpg";
import babysittersImage from "../../assets/pexels-kampus-7414391.jpg";
import sittersImage from "../../assets/pexels-polina-tankilevitch-3875197.jpg";
import domesticHelpersImage from "../../assets/pexels-olly-3769999.jpg";
import domesticImage from "../../assets/pexels-olly-3768914.jpg";
import "./SliderSection.css";

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-section">
      <Slider {...settings}>
        <div>
          <img src={medicalCareImage} alt="الرعاية الطبية" />
          <h3>الرعاية الطبية</h3>
        </div>
        <div>
          <img src={medicalImage} alt="الرعاية الطبية" />
          <h3>الرعاية الطبية</h3>
        </div>
        <div>
          <img src={kitchenStaffImage} alt="مسؤولو المطبخ" />
          <h3>مسؤولو المطبخ</h3>
        </div>
        <div>
          <img src={babysittersImage} alt="جليسات الأطفال" />
          <h3>جليسات الأطفال</h3>
        </div>
        <div>
          <img src={sittersImage} alt="جليسات الأطفال" />
          <h3>جليسات الأطفال</h3>
        </div>
        <div>
          <img src={domesticHelpersImage} alt="الخدامات" />
          <h3>الخدامات</h3>
        </div>
        <div>
          <img src={domesticImage} alt="الخدامات" />
          <h3>الخدامات</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderSection;
