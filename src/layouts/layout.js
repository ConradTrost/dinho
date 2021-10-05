import React from "react"

import Header from '../components/header';
import Footer from '../components/footer';

import "@fontsource/montserrat";
import "@fontsource/montserrat/900.css";

const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout;