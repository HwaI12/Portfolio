import React, { useEffect, useState } from "react";

const MrhmdLFL = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    document.body.classList.add('scroll-to-top');
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.body.classList.remove('scroll-to-top');
    }, 1000);
  }, []);

  return (
    <div className={`container text-center ${fadeIn ? "fade-in" : ""}`}>
      <section className='Top'>
        <h2 className={`text-uppercase ${fadeIn ? "fade-in" : ""}`} style={{ margin: "0 0 20px 0" }}>MRHMDと物体認識を活用した日常環境における自然な外国語学習手法の提案</h2>
        <div className={`${fadeIn ? "fade-in" : ""}`} style={{ maxWidth: "960px", width: "100%" }}>
          <div style={{ position: "relative", width: "100%", paddingBottom: "59.27%", boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", borderRadius: "8px", overflow: "hidden" }}>
            <iframe title="Canva Slide"
              loading="lazy"
              style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }}
              src="https://www.canva.com/design/DAF-n0YZATY/BEJ1hlv_T3ak8Zz33RhAcw/view?embed"
              allowFullScreen={true}
              allow="fullscreen">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MrhmdLFL;
