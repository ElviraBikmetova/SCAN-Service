import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from './Slider.module.scss';
import Slide from "../slide/Slide";
import data from '../../slides.json'
import { useState } from "react";
import watch from '../../assets/watch.svg'
import loupe from '../../assets/loupe.svg'
import shield from '../../assets/shield.svg'

function SimpleSlider() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

      // const [slides, setSlides] = useState(data)

    return (
      <Slider {...settings}>
        {data.map(slide => {
          return (
            <Slide img={slide.img} text={slide.text}/>
          )
        })}
      </Slider>
     );
}

export default SimpleSlider;