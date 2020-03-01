import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo/seo"
import Banner from '../components/Banner/Banner'
import Intro from '../components/Intro/Intro'
import Accordion from '../components/Accordion/Accordion'
import FAQData from '../data/qna.json'
import cprImage from '../images/cpr-2.jpg'

const AboutUsPage = () => (
  <Layout>
    <SEO title="Frequently Asked Questions" />
    <Banner
      thin
      title="Frequently Asked Questions"
      bannerImage={cprImage}
    />
    <Intro
      title="This is Frequently Asked Questions page"
      description="Here more text will be added and it will be a paragraph or multiple paragraphs"
    />
    <div className="callout-content">
      <Accordion
        label="We answered your questions"
        options={FAQData}
      />
    </div>
  </Layout>
)

export default AboutUsPage
