import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Benefit from "../benefit/Benefit";
import data from '../../json/slides.json'
import watch from '../../assets/img/watch.svg'
import loupe from '../../assets/img/loupe.svg'
import shield from '../../assets/img/shield.svg'

function BenefitsSlider() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
      <Slider {...settings}>
        {data.map(slide => {
          return (
            <Benefit key={slide.id} img={slide.img} text={slide.text}/>
          )
        })}
      </Slider>
     );
}

export default BenefitsSlider;