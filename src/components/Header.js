import React, { useEffect, useState } from "react";
import { Link as Scroll } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      const scrollTopDistance = window.scrollY;
      const headerHeight = header.offsetHeight;

      if (scrollTopDistance >= headerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "is_scroll" : ""}`}>
      <div className="logo">
        <Scroll to="Topprofile" className="header-scroll">Ishikawa Fami</Scroll>
      </div>

      <nav className="nav">
        <Scroll to="Aboutme" className="header-scroll" offset={-110}>About</Scroll>
        <Scroll to="News" className="header-scroll" offset={-110}>News</Scroll>
        <Scroll to="Works" className="header-scroll" offset={-110}>Works</Scroll>
        <Scroll to="Skill" className="header-scroll" offset={-110}>Skill</Scroll>
        <Scroll to="Contact" className="header-scroll" offset={-110}>Contact</Scroll>
      </nav>
    </header>
  );
};

export default Header;
