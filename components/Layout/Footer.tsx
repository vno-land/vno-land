import React from 'react';
import Link from 'next/link';
import VnoLogo from './VnoLogo';
import DenoLogo from './DenoLogo';

import footerStyles from '../../styles/Layout/Footer.module.css';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.contentSection}>
          <VnoLogo logoWidth={150} logoColor="#57d3af" />
          <div className={footerStyles.socialIcons}>
            <a href="https://github.com/open-source-labs/vno" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/company/vno-land/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/vno_land" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
            <a href="https://deno.land/x/vno@v1.3.1" target="_blank" rel="noopener noreferrer"><DenoLogo logoWidth={28} logoColor="#57d3af"/></a>
          </div>
        </div>

        <div className={footerStyles.contentSection}>
          <h4>About</h4>
          <p className={footerStyles.about}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro labore, autem possimus incidunt deleniti quas maiores velit dolorem omnis magni.</p>
        </div>

        <div className={footerStyles.contentSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/team">Team</Link></li>
          </ul>
        </div>

        <div className={footerStyles.contentSection}>
          <h4>Discover</h4>
          <ul>
            <li><Link href="/docs">Docs</Link></li>
            <li><Link href="/learn">Learn</Link></li>
          </ul>
        </div>
      </div>

      <div className={footerStyles.footerBar}>
        <div className={footerStyles.footerBarContent}>
          <p>Copyright &copy; 2021 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


