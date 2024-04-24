import React, { useEffect, useState } from "react";
import githubLogo from '../../../Images/icon_image/github-logo_icon-icons.com_73546.png';

const OrderStream = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    document.body.classList.add('scroll-to-top');
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.body.classList.remove('scroll-to-top');
    }, 1000);
  }, []);

  const githubUrl = "https://github.com/HwaI12/hackson-23-vol12";

  const handleGithubClick = () => {
    window.open(githubUrl, "_blank");
  };

  return (
    <div className={`container text-center ${fadeIn ? "fade-in" : ""}`}>
      <section className='Top'>
        {/* <h2 className={`text-uppercase ${fadeIn ? "fade-in" : ""}`}>Order Stream</h2> */}
        <div className={`g-slide ${fadeIn ? "fade-in" : ""}`} style={{ maxWidth: "960px", width: "100%", margin: "20px auto" }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", width: "100%", height: 0 }}>
            <iframe
              title="Google Presentation"
              src="https://docs.google.com/presentation/d/e/2PACX-1vSbedq95_grUQiUJCmF1B3Nvaqkv2mduFyowp50sq7l18gohA3CLtVAUQ2x1UIzxGdI3krH_j0ckkOg/embed?start=false&loop=false&delayms=3000"
              style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }}
              allowFullScreen={true}
              mozAllowFullScreen={true}
              webkitAllowFullScreen={true}
            ></iframe>
          </div>
        </div>
        <div className={`github-link-logo ${fadeIn ? "fade-in" : ""}`} onClick={handleGithubClick}>
          <img src={githubLogo} alt="GitHub" />
        </div>
      </section>
    </div>
  );
};

export default OrderStream;