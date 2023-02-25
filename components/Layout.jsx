import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar'; 
import Footer from './Footer';
const Layout = ({children}) => {
  return  (
    <Head> 
      <title>M.B Ecommerce Store</title>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
      {children}
      </main>
      <footer>
        <Footer />
      </footer>

    </Head>
  )
};

export default Layout;
