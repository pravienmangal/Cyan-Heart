import React from 'react'
import clsx from 'clsx'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo/seo'
import Banner from '../components/Banner/Banner';
import Intro from '../components/Intro/Intro'
import Carousel from '../components/Carousel/Carousel'
import Blockquote from '../components/BlockQuotes/Blockquotes'
import DuoBox from '../components/DuoBox/DuoBox'
import bannerImage from '../images/banner-1.png';
import cprImage from '../images/cpr-2.jpg'
import SpecialistList from '../tempContent/SpecialistList'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  // const bannerTitle = `Cyan Heart's aim is to deliver Best quality First Aid training for all to spread the "Life Saving Knowledge and Skill" to everyone.`;
  const linkTitle = 'About Cyan Heart';
  const introTitle = 'We always deliver best quality First Aid training for all';
  const introDesc = `Our aimis to deliver Best quality First Aid training for all to spread the "Life Saving Knowledge and Skill" to everyone. We aim to fulfil our client's First Aid training requirement to the best.`;
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
  const bannerData = data.Banner.nodes[0]
  return (
    <Layout>
      <SEO title="Home" />
      <Banner
        bannerImage={bannerImage}
        title={bannerData.title}
        linkName={linkTitle}
        link="/about-us"
      />
      <Intro
        title={introTitle}
        description={introDesc}
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
      filter: { name: { eq: "Banner Title" } }
    ) {
      nodes { title }
    }
  }
`