import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../../json/summary.json';
import ResultCard from "../main/search-page/results/result-card/ResultCard";

function SummarySlider() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1
      };

    return (
      <Slider {...settings}>
        {data.map(slide => {
          return (
            <ResultCard key={slide.id} slide={slide} />
          )
        })}
      </Slider>
     );
}

export default SummarySlider;