import React, { useState, useEffect } from 'react';
import profileImage from "../../Images/hwami.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import pythonLogo from '../../Images/icon_image/python_logo_icon_168886.png';
import jsLogo from '../../Images/icon_image/javascript_plain_logo_icon_146454.png';
import tsLogo from '../../Images/icon_image/typescript_original_logo_icon_146317.png';
import reactLogo from '../../Images/icon_image/react_logo_icon_168754.png';
import vueLogo from '../../Images/icon_image/file_type_vue_icon_130078.png';
import nextLogo from '../../Images/icon_image/nextjs_icon_132160.png';
import nodeLogo from '../../Images/icon_image/nodejs_plain_logo_icon_146409.png';
import postgresLogo from '../../Images/icon_image/postgresql_original_logo_icon_146391.png';
import supabaseLogo from '../../Images/icon_image/supabase_logo_icon_249481.png';
import htmlLogo from '../../Images/icon_image/file_type_html_icon_130541.png';
import cssLogo from '../../Images/icon_image/file_type_css_icon_130661.png';
import gitLogo from '../../Images/icon_image/git_plain_logo_icon_146507.png';
import githubLogo from '../../Images/icon_image/github_logo_icon_168626.png';
import dockerLogo from '../../Images/icon_image/docker_plain_logo_icon_146574.png';


const Topprofile = () => {
  return (
    <section className="Top" id="Topprofile">
      <img src={profileImage} className="profileImage" alt="" />
      <h2>Ishikawa Fami</h2>
      <p>Faculty of Data Science, Musashino University</p>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section className="page-section" id="Aboutme">
      <div className="service">
        <div className="menu-title">
          <h2 className="text-uppercase">About</h2>
        </div>
        <div className='Top-detail'>
          <p>2022年  武蔵野大学高等学校 卒業</p>
          <p>2022年  武蔵野大学 データサイエンス学部 入学</p>
          <p>大学公認クラブ「BohPJ」/ エンジニア学生団体「MUENT」所属</p>
        </div>
      </div>
    </section>
  )
}
const News = () => {
  return (
    <section className="page-section" id="News">
      <div className="service">
        <div className="menu-title">
          <h2 className="text-uppercase">News</h2>
        </div>
        <div className="Top-detail">
          <div className='detail-news'>
            <p class="date">2023/07/02</p>
            <p class="title">
              <p>サポーターズ主催 技育CAMPマンスリーハッカソン vol.5 参加</p>
            </p>
          </div>
          <div className='detail-news'>
            <p class="date">2023/07/29</p>
            <p class="title">
              <p>サポーターズ主催 技育CAMPキャラバンハッカソン@金沢 最優秀賞受賞 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
              </svg></p>
            </p>
          </div>
          <div className='detail-news'>
            <p class="date">2023/09/02</p>
            <p class="title">
              <p>サポーターズ主催 技育CAMPアドバンス2023 vol.3 副大賞受賞 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
              </svg></p>
            </p>
          </div>
          <div className='detail-news'>
            <p class="date">2023/12/03</p>
            <p class="title">
              <p>サポーターズ主催 技育CAMPマンスリーハッカソン vol.12 参加</p>
            </p>
          </div>
          <div className='detail-news'>
            <p class="date">2024/03/16</p>
            <p class="title">
              <p>情報処理学会 第86回全国大会 発表</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

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


const Skill = () => {
  const skillLogos = [
    { src: pythonLogo, alt: 'Python' },
    { src: jsLogo, alt: 'JavaScript' },
    { src: tsLogo, alt: 'TypeScript' },
    { src: reactLogo, alt: 'React' },
    { src: vueLogo, alt: 'Vue.js' },
    { src: nextLogo, alt: 'Next.js' },
    { src: nodeLogo, alt: 'Node.js' },
    { src: postgresLogo, alt: 'PostgreSQL' },
    { src: supabaseLogo, alt: 'Supabase' },
    { src: htmlLogo, alt: 'HTML' },
    { src: cssLogo, alt: 'CSS' },
    { src: gitLogo, alt: 'Git' },
    { src: githubLogo, alt: 'GitHub' },
    { src: dockerLogo, alt: 'Docker' },
  ];

  return (
    <section className="page-section" id="Skill">
      <div className="service">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Skill</h2>
          <div className="skill-image-list">
            <ul>
              {skillLogos.map((logo, index) => (
                <li key={index}>
                  <img src={logo.src} alt={logo.alt} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="container text-center">
      <Topprofile />
      <AboutMe />
      <News />
      <Works />
      <Skill />
    </div>
  );
};

export default HomePage;