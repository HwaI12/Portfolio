import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const AtherHeader = () => {
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
                <Link to="/portfolio" className="header-scroll">Fami Ishikawa</Link>
            </div>
        </header>
    );
};

export default AtherHeader;
