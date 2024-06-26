import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MRHMD from '../../../Images/slide_image/MRHMD_86.png';
import MONEY from '../../../Images/slide_image/MONEY_23_vol5.png';
import KOIJAN from '../../../Images/slide_image/KOIJAN_23_vol3.png';
import ORDER from '../../../Images/slide_image/ORDER_23_vol12.png';
import CHIC from '../../../Images/slide_image/CHIC_23_3Q.png';

import { useNavigate } from 'react-router-dom';

const Works = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      let slides = 1;
      if (window.innerWidth >= 992) {
          slides = 3;
      } else if (window.innerWidth >= 768) {
          slides = 2;
      } else if (window.innerWidth >= 650) {
          slides = 1;
      }
      setSlidesToShow(slides);
  };
  
  

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSlideClick = (path) => {
    navigate(path); // 正しい関数名に修正
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <section className="page-section" id="Works">
      <div className="service">
        <div className="menu-title">
          <h2 className="text-uppercase">Works</h2>
        </div>
        <Slider {...settings}>
          <div className='slider-list' onClick={() => handleSlideClick("/portfolio/work/money-records")}>
            <img src={MONEY} alt="MONEY" />
          </div>
          <div className='slider-list' onClick={() => handleSlideClick("/portfolio/work/koi-jan")}>
            <img src={KOIJAN} alt="KOIJAN" />
          </div>
          <div className='slider-list' onClick={() => handleSlideClick("/portfolio/work/order-stream")}>
            <img src={ORDER} alt="ORDER" />
          </div>
          <div className='slider-list' onClick={() => handleSlideClick("/portfolio/work/chic-sight")}>
            <img src={CHIC} alt="CHIC" />
          </div>
          <div className='slider-list' onClick={() => handleSlideClick("/portfolio/work/mrhmdLFL")}>
            <img src={MRHMD} alt="MRHMD" />
          </div>
          {/* <div className='slider-list'>
            <h3>6</h3>
          </div>  */}
        </Slider>
      </div>
    </section>
  );
};

export default Works;
