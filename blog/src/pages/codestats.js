import React, { Component } from 'react';
import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from  "@components/Layout"
import styled from '@emotion/styled';

const Hero = styled.div`
  background-color: ${p => p.theme.colors.hero};
  color: ${p => p.theme.colors.primary};
  margin-top: 52px;
  padding-top: 20px;
  padding-bottom: 20px;
  .author {
    margin: 0 auto;
    max-width: 600px;
    text-align: center;
    padding: 0.5rem 0.75rem;
    &__logo {
      border-radius: 100%;
      width: 60px;
      height: 60px;
      margin-bottom: 2em;
    }
    &__intro {
      opacity: 0.8;
      margin-top: 1em;
      margin-bottom: 2em;
    }
    &__site-title {
      font-size: 1.8em;
      font-weight: 400;
    }
  }
`;

const LocalContainer = styled.div`
  padding: 0 1.5rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  color: ${p => p.theme.colors.primary};
  .large-font {
    font-size: large;
    font-weight: 600;
  }
  h2 {
    font-size: 3rem;
    line-height: 1.3;
    margin: 0 0 2rem;
    border-bottom: 2px solid ${p => p.theme.colors.horizontalRule};
    padding-bottom: .5rem;
    font-weight: 500;
  }
  p {
    font-size: 1.8rem;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
`;

export default class ClientFetchingExample extends Component {
  render() {
    return (
      <Layout>
        <SEO />
        <Hero>
          <div className='author'>
            <img alt='Newsletters' className='author__logo' src={'/assets/newsletter.png'} />
            <h1 className='author__site-title'>Newsletters</h1>
            <p className='author__intro'>Sub-heading</p>
          </div>
        </Hero>
        <br />
        <br />
        <Section narrow>
        <LocalContainer>
          <h2>Archive</h2>
			 <a href="../f8538a38bc83683e0aeaa9bde1c7b914/May_20.pdf">
			 May 2020 
			 </a>
        </LocalContainer>
        </Section>
      </Layout>
    );
  }
}
