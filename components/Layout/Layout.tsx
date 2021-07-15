import React, { FC } from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout:FC = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
