import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MRHMD from '../../../Images/slide_image/MRHMD_86.png';
import MONEY from '../../../Images/slide_image/MONEY_23_vol5.png';
import KOIJAN from '../../../Images/slide_image/KOIJAN_23_vol3.png';
import ORDER from '../../../Images/slide_image/ORDER_23_vol12.png';

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
            <h3>MRHMDと物体認識・・・</h3>
            <img src={MRHMD} alt="MRHMD" />
          </div>
          <div className='slider-list' onClick={() => handleSlideClick("/portfolio/work/money-records")}>
            <h3>Moneyrecords</h3>
            <img src={MONEY} alt="MONEY" />
          </div>
          <div className='slider-list' onClick={() => handleSlideClick("/portfolio/work/koi-jan")}>
            <h3>恋じゃん</h3>
            <img src={KOIJAN} alt="KOIJAN" />
          </div>
          <div className='slider-list' onClick={() => handleSlideClick("/portfolio/work/order-stream")}>
            <h3>OrderStream</h3>
            <img src={ORDER} alt="ORDER" />
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
