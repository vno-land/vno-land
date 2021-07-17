import React, { FC } from 'react';
import Nav from './Nav';
import Footer from './Footer';

import layoutStyles from '../../styles/Layout/Layout.module.css';

const Layout:FC = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={layoutStyles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
