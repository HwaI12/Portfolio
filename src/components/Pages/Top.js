import React, { useState, useEffect } from 'react';
import profileImage from "../../Images/hwami.jpg";
import miraiPJ from "../../Images/global-study.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container text-center">
      <section className="Top" id="Topprofile">
        <img src={profileImage} className="profileImage" alt="" />
        <h2>Ishikawa Fami</h2>
        <p>Faculty of Data Science, Musashino University</p>
      </section>

      <section className="page-section" id="Aboutme">
        <div className="service">
          <div className="menu-title">
            <h2 className="text-uppercase">About</h2>
          </div>
          <div className="Top-detail">
            <div>
              <p>2022年  武蔵野大学附属高等学校 卒業</p>
              <p>2022年  武蔵野大学 データサイエンス学部 入学</p>
              <p>大学公認クラブ「BohPJ」/ エンジニア学生団体「MUENT」所属</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="News">
        <div className="service">
          <div className="menu-title">
            <h2 className="text-uppercase">News</h2>
          </div>
          <div className="Top-detail">
            <div className='detail-news'>
              <p class="date">2023/07/02</p>
              <p class="title">
                <a href=" portfolio-js">サポーターズ主催 技育CAMPマンスリーハッカソン vol.5 参加</a>
              </p>
            </div>
            <div className='detail-news'>
              <p class="date">2023/07/29</p>
              <p class="title">
                <a href="portfolio-js">サポーターズ主催 技育CAMPキャラバンハッカソン@金沢 最優秀賞受賞 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
                  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
                </svg></a>
              </p>
            </div>
            <div className='detail-news'>
              <p class="date">2023/09/02</p>
              <p class="title">
                <a href="portfolio-js">サポーターズ主催 技育CAMPアドバンス2023 vol.3 副大賞受賞 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
                  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
                </svg></a>
              </p>
            </div>
            <div className='detail-news'>
              <p class="date">2023/12/03</p>
              <p class="title">
                <a href=" portfolio-js">サポーターズ主催 技育CAMPマンスリーハッカソン vol.12 参加</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="Works">
        <div className="service">
          <div className="menu-title">
            <h2 className="text-uppercase">Works</h2>
          </div>
          <div className="swiper">
            {isMobile ? (
              <Swiper
                slidesPerView={1}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>MRHMDと物体認識を活用した日常環境における自然な外国語学習手法の提案
                  <img src={miraiPJ} className="miraiPJ" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
              </Swiper>
            ) : (
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>MRHMDと物体認識を活用した日常環境における自然な外国語学習手法の提案
                  <img src={miraiPJ} className="miraiPJ" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
              </Swiper>
            )}
          </div>
        </div>
      </section>

      <section className="page-section" id="Skill">
        <div className="service">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Skill</h2>
            <h3 className="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
        </div>
      </section>

      <section className="page-section" id="Contact">
        <div className="service">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 className="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
