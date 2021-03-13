import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Michael Eclavea'}</span>
            <br />
            {subtitle || "I'm a Full-Stack JavaScript Developer."}
          </h1>
        </Fade>
        <section style={{display: 'flex', gap: '20px'}}>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
              <Link to="about" smooth duration={1000}>
            <span className="cta-btn cta-btn--hero">
                {cta || 'About me'}
            </span>
              </Link>
          </p>
        </Fade>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1300} distance="30px">
          <p className="hero-cta">
              <Link to="projects" smooth duration={1000}>
            <span className="cta-btn cta-btn--hero">
                {cta || 'Projects'}
            </span>
              </Link>
          </p>
        </Fade>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1600} distance="30px">
          <p className="hero-cta">
              <Link to="footer" smooth duration={1000}>
            <span className="cta-btn cta-btn--hero">
                {cta || 'Social'}
            </span>
              </Link>
          </p>
        </Fade>
        </section>
      </Container>
    </section>
  );
};

export default Header;
