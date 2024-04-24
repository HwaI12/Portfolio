import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useNavigate } from 'react-router-dom';

const Works = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const navigate = useNavigate(); // 正しいフック名に修正

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 576) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
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
          <div className='slider-list' onClick={() => handleSlideClick("/portfolio/work/mrhmdLFL")}>
            <h3>MRHMDと物体認識を活用した日常環境における自然な外国語学習手法の提案</h3>
          </div>
          <div className='slider-list' onClick={() => handleSlideClick("/portfolio/work/money-records")}>
            <h3>Moneyrecords</h3>
          </div>
          <div className='slider-list' onClick={() => handleSlideClick("/portfolio/work/koi-jan")}>
            <h3>恋じゃん</h3>
          </div>
          <div className='slider-list' onClick={() => handleSlideClick("/portfolio/work/order-stream")}>
            <h3>OrderStream</h3>
          </div>
          {/* <div className='slider-list'>
            <h3>5</h3>
          </div>
          <div className='slider-list'>
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default Works;
