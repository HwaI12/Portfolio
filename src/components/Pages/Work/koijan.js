import React, { useEffect, useState } from "react";
import githubLogo from '../../../Images/icon_image/github-logo_icon-icons.com_73546.png';

const Koijan = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    document.body.classList.add('scroll-to-top');
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.body.classList.remove('scroll-to-top');
    }, 1000);
  }, []);

  const githubUrl = "https://github.com/HwaI12/koi-jan";

  const handleGithubClick = () => {
    window.open(githubUrl, "_blank");
  };

  return (
    <div className={`container text-center ${fadeIn ? "fade-in" : ""}`}>
      <section className='Top'>
        <h2 className={`text-uppercase ${fadeIn ? "fade-in" : ""}`}>恋じゃん</h2>
        <div className={`g-slide ${fadeIn ? "fade-in" : ""}`} style={{ maxWidth: "960px", width: "100%", maxHeight: "569px", height: "100%", margin: "0 auto" }}>
          <iframe
            title="Google Presentation"
            src="https://docs.google.com/presentation/d/e/2PACX-1vRHkQVU8VvXyiUsWqIGROUxcIHuejJwTUnrzfr69e87YyMgbmtEq9vgzCfAvHGtti9688h2Rl7U88bQ/embed?start=false&loop=false&delayms=3000"
            style={{ width: "100%", height: "100%" }}
            allowFullScreen={true}
            mozAllowFullScreen={true}
            webkitAllowFullScreen={true}
          ></iframe>
        </div>
        <div className={`github-link-logo ${fadeIn ? "fade-in" : ""}`} onClick={handleGithubClick}>
          <img src={githubLogo} alt="GitHub" />
        </div>
      </section>
    </div>
  );
};

export default Koijan;
