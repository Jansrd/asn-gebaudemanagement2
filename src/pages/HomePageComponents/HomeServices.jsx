import Slider from "react-slick";
import ServiceCard from "../../components/ServiceCard";
import { services } from "../../services";
import Title from "../../components/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeService({ onClick }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3300,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 390,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 360,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "17px",
        },
      },
    ],
  };

  return (
    <div className="home-service">
      <div className="home-service-top" id="home-service-title">
        <Title
          title="Dienstleistungen"
          subtitle="Erfahren Sie mehr über unsere Angebote und Leistungen."
        />
      </div>
      <div className="home-service-bottom" id="home-service-bottom">
        <Slider {...settings}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              text={service.text}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
