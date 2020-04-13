import React from 'react'
import clsx from 'clsx'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo/seo'
import Banner from '../components/Banner/Banner';
import Intro from '../components/Intro/Intro'
import Carousel from '../components/Carousel/Carousel'
import Blockquote from '../components/BlockQuotes/Blockquotes'
import DuoBox from '../components/DuoBox/DuoBox'
import cprImage from '../images/cpr-2.jpg'
import SpecialistList from '../tempContent/SpecialistList'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const linkTitle = 'About Cyan Heart';
  const textImageTitle = 'We Specialized in delivering';

  const quotes = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id mi facilisis, fringilla tortor et, eleifend nibh ullamcorper bibendum diam, non tempor purus suscipit nec.",
      author: "Cyan Heart Client"
    },
    {
      id: 2,
      quote: "One more quote by a random person is here",
      author: "Random person"
    },
    {
      id: 3,
      quote: "Lots of line in this no sense made quotation by a very loyal client who wrote this just to take their name in to this colorful slide",
      author: "Third person"
    }
  ];

  const renderColorName = i => {
    switch (i) {
      case 0:
        return 'yellow'
      case 1:
        return 'gray'
      case 2:
        return 'green'
    }
  };

  console.log('data', data)
  const homeData = data.Banner.nodes[0]
  return (
    <Layout>
      <SEO title="Home" />
      <Banner
        bannerImage={homeData.bannerImage}
        title={homeData.bannerTitle}
        linkName={linkTitle}
        link="/about-us"
      />
      <Intro
        title={homeData.introTitle}
        description={homeData.introDescription}
      />
      <DuoBox
        title={textImageTitle}
        image={cprImage}
      >
        <SpecialistList />
      </DuoBox>
      <div className="carousel-container">
        <Carousel>
          {quotes.map((quote, index) => {
            return (
              <div className={clsx("quote-item", renderColorName(index))} key={quote.id}>
                <Blockquote quote={quote.quote} author={quote.author} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </Layout>
  );
}

export default IndexPage

export const query = graphql`
  {
    Banner: allHomePageJson(
      filter: { name: { eq: "Home Page Details" } }
    ) {
      nodes {
        bannerTitle,
        bannerImage,
        introTitle,
        introDescription
      }
    }
  }
`