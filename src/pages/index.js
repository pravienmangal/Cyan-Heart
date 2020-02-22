import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo/seo"
import Banner from "../components/Banner/Banner";
import Intro from '../components/Intro/Intro'
import BannerImage from '../images/banner-1.png';

const IndexPage = () => {
  const bannerTitle = `Cyan Heart's aim is to deliver Best quality First Aid training for all to spread the "Life Saving Knowledge and Skill" to everyone.`;
  const linkTitle = 'Anout Cyan Heart';
  const introTitle = 'We always deliver best quality First Aid training for all';
  const introDesc = `Our aim is to deliver Best quality First Aid training for all to spread the "Life Saving Knowledge and Skill" to everyone. We aim to fulfil our client's First Aid training requirement to the best.`;
  return (
    <Layout>
      <SEO title="Home" />
      <Banner
        bannerImage={BannerImage}
        title={bannerTitle}
        link={linkTitle}
      />
      <Intro
        title={introTitle}
        description={introDesc}
      />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export default IndexPage
