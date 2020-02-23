import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo/seo'
import Banner from '../components/Banner/Banner';
import Intro from '../components/Intro/Intro'
import Carousel from '../components/Carousel/Carousel'
import Blockquote from '../components/BlockQuotes/Blockquotes'
import BannerImage from '../images/banner-1.png';

const IndexPage = () => {
  const bannerTitle = `Cyan Heart's aim is to deliver Best quality First Aid training for all to spread the "Life Saving Knowledge and Skill" to everyone.`;
  const linkTitle = 'Anout Cyan Heart';
  const introTitle = 'We always deliver best quality First Aid training for all';
  const introDesc = `Our aimis to deliver Best quality First Aid training for all to spread the "Life Saving Knowledge and Skill" to everyone. We aim to fulfil our client's First Aid training requirement to the best.`;

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

  const renderColorName = id => {
    switch (id) {
      case 1:
        return 'yellow'
      case 2:
        return 'gray'
      case 3:
        return 'green'
    }
  };

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
      <Carousel>
        {quotes.map(quote => {
          return (
            <div className={renderColorName(quote.id)} key={quote.id}>
              <Blockquote quote={quote.quote} author={quote.author} />
            </div>
          );
        })}
      </Carousel>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export default IndexPage
