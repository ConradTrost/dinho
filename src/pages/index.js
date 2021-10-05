import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import Layout from '../layouts/layout';

const IndexPage = () => {
  return (
    <Layout>
    <div className="hero relative flex flex-col justify-center h-screen">
      <div className="hero-wrap absolute top-0 left-0 w-full">
        <StaticImage src="../assets/images/hero.jpg" layout="fullWidth" />
      </div>
      <div className=" hero-inner-wrap justify-center flex-col z-50 m-auto">
        <h1>Excellence Inspired.<br />Chef Prepared.</h1>
        <h3>Dallas, Fort Worth, Plano, Frisco, Addison & More</h3>
      </div>
    </div>
    </Layout>
  )
}

export default IndexPage;