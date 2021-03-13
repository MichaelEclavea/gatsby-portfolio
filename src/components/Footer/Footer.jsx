import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <Link to="hero" smooth duration={1000}>
          <div className="back-to-top">
            <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
            <p>Back to top</p>
          </div>
        </Link>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                  <i className={`fa fa-${name} fa-inverse`} />
                </a>
              );
            })}
        </div>
      </Container>
      <hr />
      <section style={{ bottom: '0' }}>
        <p className="footer__text">
          © {new Date().getFullYear()} - Template developed by{' '}
          <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
