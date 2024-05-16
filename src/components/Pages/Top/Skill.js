import React, { useState, useEffect } from 'react';

import pythonLogo from '../../../Images/icon_image/python_logo_icon_168886.png';
import jsLogo from '../../../Images/icon_image/javascript_plain_logo_icon_146454.png';
import tsLogo from '../../../Images/icon_image/typescript_original_logo_icon_146317.png';
import reactLogo from '../../../Images/icon_image/react_original_logo_icon_146374.png';
import vueLogo from '../../../Images/icon_image/file_type_vue_icon_130078.png';
import postgresLogo from '../../../Images/icon_image/postgresql_original_logo_icon_146391.png';
import htmlLogo from '../../../Images/icon_image/file_type_html_icon_130541.png';
import cssLogo from '../../../Images/icon_image/file_type_css_icon_130661.png';
import gitLogo from '../../../Images/icon_image/git_plain_logo_icon_146507.png';
import githubLogo from '../../../Images/icon_image/github-logo_icon-icons.com_73546.png';
import dockerLogo from '../../../Images/icon_image/docker_icon_146192.png';

const Skill = () => {
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      let columns = 1;
      if (window.innerWidth >= 992) {
          columns = 2;
      }
      setNumColumns(columns);
  };
  

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const skills = [
    { src: pythonLogo, alt: 'Python', skill_name: 'Python', description: '機械学習や深層学習を用いた開発やデータ分析に使用。AWS LambdaやBedrockを用いたサーバーレス開発にも経験があります。' },
    { src: jsLogo, alt: 'JavaScript', skill_name: 'JavaScript', description: 'フロントエンドおよびバックエンド開発に使用。ReactやVue.jsを用いた開発経験があります。' },
    { src: tsLogo, alt: 'TypeScript', skill_name: 'TypeScript', description: 'インターンシップの業務で使用経験があります。Azure AI Languageの固有表現認識（NER）APIを使用した業務に使用しました。' },
    { src: reactLogo, alt: 'React', skill_name: 'React', description: 'フロントエンド開発に使用。ポートフォリオサイトやハッカソンでの開発経験があります。' },
    { src: vueLogo, alt: 'Vue.js', skill_name: 'Vue.js', description: 'フロントエンド開発に使用。ハッカソンでの開発経験があります。' },
    { src: postgresLogo, alt: 'PostgreSQL', skill_name: 'PostgreSQL', description: 'データベースの設計や開発に使用。授業の課題や個人開発で使用経験があります。' },
    { src: htmlLogo, alt: 'HTML', skill_name: 'HTML', description: 'フロントエンド開発に使用。ハッカソンや授業での開発経験があります。' },
    { src: cssLogo, alt: 'CSS', skill_name: 'CSS', description: 'フロントエンド開発に使用。ハッカソンや授業での開発経験があります。' },
    { src: gitLogo, alt: 'Git', skill_name: 'Git', description: 'バージョン管理に使用。インターンシップにて常時使用。チーム開発や個人開発での使用経験があります。' },
    { src: githubLogo, alt: 'GitHub', skill_name: 'GitHub', description: 'バージョン管理に使用。ハッカソンでのチーム開発や個人開発で使用経験があります。' },
    { src: dockerLogo, alt: 'Docker', skill_name: 'Docker', description: 'コンテナ仮想化技術に使用。授業やハッカソンのチーム開発で使用経験があります。' },
  ];

  return (
    <section className="page-section" id="Skill">
      <div className="service">
        <h2 className="text-uppercase">Skills</h2>
        <div className="text-center">
          <div className="skill-image-list" style={{ gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}>
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.src} alt={skill.alt} className="skill-logo" />
                <div className="skill-details">
                  <p className="skill-name">{skill.skill_name}</p>
                  <p className="skill-description">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
