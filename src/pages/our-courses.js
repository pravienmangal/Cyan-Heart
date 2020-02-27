import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo/seo"
import Banner from '../components/Banner/Banner'
import Intro from '../components/Intro/Intro'
import Callout from '../components/Callout/Callout'
import cprImage from '../images/cpr-2.jpg'
import courses from '../data/courses.json'

const AboutUsPage = () => (
  <Layout>
    <SEO title="Our courses" />
    <Banner
      thin
      title="Our courses"
      bannerImage={cprImage}
    />
    <Intro
      title="This is Our courses page"
      description="Here more text will be added and it will be a paragraph or multiple paragraphs"
    />
    <div className="callout-content">
      <Callout options={courses} />
    </div>
  </Layout>
)

export default AboutUsPage
