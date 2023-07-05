import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mock from '../../json/summary.json';
import ResultCard from "../main/search-page/results/result-card/ResultCard";
import { useDispatch, useSelector } from "react-redux";
import ArrowPrev from "../../assets/svg-in-js/arrrow-prev";
import ArrowNext from "../../assets/svg-in-js/arrow-next";
import { useEffect, useState } from "react";
import { toggleisEmptyResponse, toggleisResult } from "../../store/publicationsSlice";


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

export function SummarySlider() {
  const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />
    };

    const dispatch = useDispatch()
    const histograms = useSelector(state => state.publications.histograms)
    const [histogramsData, setHistogramsData] = useState({})
    let summary

    useEffect(() => {
        setHistogramsData(histograms)
    }, [histograms])

    useEffect(() => {
      if (histogramsData?.data?.length || null) {
        dispatch(toggleisEmptyResponse(false))
      } else {
        dispatch(toggleisResult(true))
      }
    },[dispatch, histogramsData?.data?.length])

    if (histogramsData?.data?.length || null) {
      const data = histogramsData.data
      summary = data[0].data.map((item, index) => ({
        date: item.date,
        totalDocuments: data[0].data[index].value,
        riskFactors: data[1].data[index].value
      }));
      return (
        <Slider {...settings}>
          {summary && summary.map(slide => {
            return (
              <ResultCard key={slide.date} slide={slide}/>
            )
          })}
        </Slider>
        );
    }
}

export function SummarySliderForMobile() {
  const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />
    };

    const dispatch = useDispatch()
    const histograms = useSelector(state => state.publications.histograms)
    const [histogramsData, setHistogramsData] = useState({})

    let summary

    useEffect(() => {
        setHistogramsData(histograms)
    }, [histograms])

    useEffect(() => {
      if (histogramsData?.data?.length || null) {
        dispatch(toggleisEmptyResponse(false))
      } else {
        dispatch(toggleisResult(true))
      }
    },[dispatch, histogramsData?.data?.length])

    if (histogramsData?.data?.length || null) {
      const data = histogramsData.data
      summary = data[0].data.map((item, index) => ({
        date: item.date,
        totalDocuments: data[0].data[index].value,
        riskFactors: data[1].data[index].value
      }));
      return (
        <Slider {...settings}>
          {summary && summary.map(slide => {
            return (
              <ResultCard key={slide.date} slide={slide}/>
            )
          })}
        </Slider>
        );
    } 
}