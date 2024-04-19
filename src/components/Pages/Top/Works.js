// Works.js
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Works = () => {
    const [slidesToShow, setSlidesToShow] = useState(3);
  
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
            <div className='slider-list'>
              <h3>1</h3>
            </div>
            <div className='slider-list'>
              <h3>2</h3>
            </div>
            <div className='slider-list'>
              <h3>3</h3>
            </div>
            <div className='slider-list'>
              <h3>4</h3>
            </div>
            <div className='slider-list'>
              <h3>5</h3>
            </div>
            <div className='slider-list'>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </section>
    );
  };

export default Works;