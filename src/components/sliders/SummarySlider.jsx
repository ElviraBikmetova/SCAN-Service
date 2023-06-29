import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mock from '../../json/summary.json';
import ResultCard from "../main/search-page/results/result-card/ResultCard";
import { useSelector } from "react-redux";

function SummarySlider() {
  const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1
    };

  const histograms = useSelector(state => state.publications.histograms.data)
  let summary

  if (histograms) {
    summary = histograms[0].data.map((item, index) => ({
      date: item.date,
      totalDocuments: histograms[0].data[index].value,
      riskFactors: histograms[1].data[index].value
    }));
  }

  return (
    <Slider {...settings}>
      {summary && summary.map(slide => {
        // console.log(slide.date)
        return (
          <ResultCard key={slide.date} slide={slide}/>
        )
      })}
    </Slider>
    );
}

export default SummarySlider;