// News.js
import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <section className="page-section" id="News">
      <div className="service">
        <div className="menu-title">
          <h2 className="text-uppercase">News</h2>
        </div>
        <div className="Top-detail">
          <div className='detail-news'>
            <p class="date">2024/03/16</p>
            <p class="title">
              <Link to="/portfolio/work/mrhmdLFL">情報処理学会 第86回全国大会 発表</Link>
            </p>
          </div>
          <div className='detail-news'>
            <p class="date">2024/02/05</p>
            <p class="title">
              <p>株式会社コムスクエアでの開発インターンを開始</p>
            </p>
          </div>
          <div className='detail-news'>
            <p class="date">2023/12/03</p>
            <p class="title">
              <Link to="/portfolio/work/order-stream">サポーターズ主催 技育CAMPマンスリーハッカソン vol.12 参加</Link>
            </p>
          </div>
          <div className='detail-news'>
            <p class="date">2023/09/02</p>
            <p class="title">
              <Link to="/portfolio/work/koi-jan">サポーターズ主催 技育CAMPアドバンス2023 vol.3 副大賞受賞 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
              </svg></Link>
            </p>
          </div>
          <div className='detail-news'>
            <p class="date">2023/07/29</p>
            <p class="title">
              <Link to="/portfolio/work/koi-jan">サポーターズ主催 技育CAMPキャラバンハッカソン@金沢 最優秀賞受賞 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
              </svg></Link>
            </p>
          </div>
          <div className='detail-news'>
            <p class="date">2023/07/02</p>
            <p class="title">
              <Link to="/portfolio/work/money-records">サポーターズ主催 技育CAMPマンスリーハッカソン vol.5 参加</Link>
            </p>
          </div>
        </div>
      </div>
    </section >
  )
}

export default News;
