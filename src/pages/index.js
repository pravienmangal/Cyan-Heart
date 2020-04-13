import React from 'react'
import clsx from 'clsx'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo/seo'
import Banner from '../components/Banner/Banner';
import Intro from '../components/Intro/Intro'
import Carousel from '../components/Carousel/Carousel'
import Blockquote from '../components/BlockQuotes/Blockquotes'
import DuoBox from '../components/DuoBox/DuoBox'
import SpecialistList from '../tempContent/SpecialistList'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const linkTitle = 'About Cyan Heart';
  const textImageTitle = 'We Specialized in delivering';

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

  const quotes = [
    {
      id: 1,
      quote: homeData.quote1,
      author: homeData.author1
    },
    {
      id: 2,
      quote: homeData.quote2,
      author: homeData.author2
    },
    {
      id: 3,
      quote: homeData.quote3,
      author: homeData.author3
    }
  ];

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
        image={homeData.specialisedImage}
      >
        <SpecialistList data={homeData.specialisedList} />
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
        introDescription,
        specialisedList,
        specialisedImage,
        quote1,
        author1,
        quote2,
        author2,
        quote3,
        author3,
      }
    }
  }
`