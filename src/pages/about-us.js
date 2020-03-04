import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo/seo"
import Banner from '../components/Banner/Banner'
import Intro from '../components/Intro/Intro'
import DuoBox from '../components/DuoBox/DuoBox'
import SpecialistList from '../tempContent/SpecialistList'
import cprImage from '../images/cpr-2.jpg'

const AboutUsPage = () => (
  <Layout>
    <SEO title="About us" />
    <Banner
      thin
      title="About us"
      bannerImage={cprImage}
    />
    <Intro
      title="This is About us page"
      description="Here more text will be added and it will be a paragraph or multiple paragraphs"
    />
    <DuoBox
      title="This is About us page"
      image={cprImage}
    >
      <SpecialistList />
    </DuoBox>
  </Layout>
)

export default AboutUsPage
