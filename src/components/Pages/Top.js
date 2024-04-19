import React, { useState, useEffect } from 'react';
import profileImage from "../../Images/hwami.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  return (
    <section className="page-section" id="Skill">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Skills</h2>
          <h3 className="section-subheading text-muted mb-5">
            私が使える技術やツールです
          </h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h4>プログラミング言語</h4>
            <ul>
              <li>Python (Intermediate)</li>
              <li>JavaScript / TypeScript (Advanced)</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>フレームワーク・ライブラリ</h4>
            <ul>
              <li>React (Advanced)</li>
              <li>Vue (Intermediate)</li>
              <li>Next.js (Intermediate)</li>
              <li>Node.js (Advanced)</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>データベース</h4>
            <ul>
              <li>SQL (Advanced)</li>
              <li>PostgreSQL (Intermediate)</li>
              <li>Supabase (Intermediate)</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h4>フロントエンド開発</h4>
            <ul>
              <li>HTML (Advanced)</li>
              <li>CSS (Advanced)</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>バージョン管理</h4>
            <ul>
              <li>Git (Advanced)</li>
              <li>GitHub (Intermediate)</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>その他</h4>
            <ul>
              <li>Docker (Intermediate)</li>
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