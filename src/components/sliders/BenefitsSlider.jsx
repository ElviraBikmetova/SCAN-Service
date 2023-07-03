import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Benefit from "../main/homepage/benefits/benefit/Benefit";
import data from '../../json/slides.json'
import ArrowPrev from "../../assets/svg-in-js/arrrow-prev";
import ArrowNext from "../../assets/svg-in-js/arrow-next";


function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowPrev />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowNext />
    </div>
  );
}

export function BenefitsSlider() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
      };

    return (
      <Slider {...settings}>
        {data.map(slide => {
          return (
            <Benefit key={slide.id} src={slide.src} alt={slide.alt} text={slide.text}/>
          )
        })}
      </Slider>
     );
}

export function BenefitsSliderForMobile() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
      };

    return (
      <Slider {...settings}>
        {data.map(slide => {
          return (
            <Benefit key={slide.id} src={slide.src} alt={slide.alt} text={slide.text}/>
          )
        })}
      </Slider>
     );
}