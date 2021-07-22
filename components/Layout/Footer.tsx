import React from 'react';
import Link from 'next/link';
import VnoLogo from './Utility/VnoLogo';
import DenoLogo from './Utility/DenoLogo';

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
          <p className={footerStyles.about}>Vno is a third-party module for Deno (an alternative to node.js) that brings together two different technologies, i.e., Vue and Deno.</p>
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
            <li><Link href="/docs/ssg/getting-started">Docs</Link></li>
            <li><Link href="/learn/ssg/create-vno-app">Learn</Link></li>
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


