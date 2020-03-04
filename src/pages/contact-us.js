import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo/seo"
import Banner from '../components/Banner/Banner'
import Intro from '../components/Intro/Intro'
import DuoBox from '../components/DuoBox/DuoBox'
import cprImage from '../images/cpr-2.jpg'
import ContactForm from '../components/ContactForm/ContactForm'

const ContactUsPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Banner
      thin
      title="Contact Us"
      bannerImage={cprImage}
    />
    <Intro
      title="This is Contact Us page"
      description="Here more text will be added and it will be a paragraph or multiple paragraphs"
    />
    <div className="callout-content container">
      <DuoBox
        title="Contact Us"
        content={<ContactForm />}
      >
        <p>If you like to find out more details about the course you are looking for or you have any queries or question for us or to leave a feedback about the course you have received through us, please complete the form below and we will be in touch with you soon.</p>
      </DuoBox>
    </div>
  </Layout>
)

export default ContactUsPage
