import React, { FC } from 'react';
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

import layoutStyles from '../../styles/Layout/Layout.module.css';

const Layout:FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Vno Land</title>
        <meta name='description' content='The first build tool for compiling and bundling Vue components in a Deno runtime environment' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
          integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </Head>
      <Nav />
      <main className={layoutStyles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
