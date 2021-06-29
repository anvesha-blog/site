import React, { Component } from 'react';
import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from  "@components/Layout"
import styled from '@emotion/styled';
import Subscription from '@components/Subscription';
import HyvorTalk from 'hyvor-talk-react';
import Headings from '@components/Headings';
import mediaqueries from '@styles/media';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import {
  Box,
  Card,
  Heading,
  Image,
  Text,
  Flex
} from 'rebass';

const Hero = styled.div`
  color: ${p => p.theme.colors.primary};
  margin-top: 20px;
  padding-top: 20px;
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
  margin-bottom: 10%;
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
  h3 {
    font-size: 2rem;
    line-height: 1.3;
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
  a {
	 color: ${p => p.theme.colors.accent};
  }
`;

const wide = '1fr';
const Item = styled.div`
  position: relative;
  display: grid;
  max-width: 100%;
  max-height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
  z-index: 1;
  transition: transform 0.33s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

const ImageContainer = styled.div`
  position: relative;
  height: 280px;
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.3),
    0 18px 36px -18px rgba(0, 0, 0, 0.25);
  margin-bottom: 30;
  transition: transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);

  & > div {
    height: 100%;
  }

  ${mediaqueries.tablet`
    height: 200px;
    margin-bottom: 35px;
  `}

  ${mediaqueries.phablet`
    overflow: hidden;
    margin-bottom: 0;
    box-shadow: none;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  `}
`;

const Title = styled(Headings.h2)`
  font-size: 30px;
  font-family: 'Merriweather';
  transition: color 0.3s ease-in-out;

  ${mediaqueries.desktop`
    margin-bottom: 15px;
  `}

  ${mediaqueries.tablet`
    font-size: 24px;
  `}

  ${mediaqueries.phablet`
    font-size: 22px;
    padding: 30px 20px 0;
    margin-bottom: 10px;
    -webkit-line-clamp: 3;
  `}
`;

const Excerpt = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${(p) => p.theme.colors.grey};

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.tablet`
    margin-bottom; 15px;
  `}

  ${mediaqueries.phablet`
    max-width: 100%;
    padding: 0 20px;
    margin-bottom: 20px;
    -webkit-line-clamp: 3;
  `}
`;

const Tags = styled.div`
  position: relative;
  display: block;
  width: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
  z-index: 1;
  transition: transform 0.33s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  margin: 10px 0;

  ${mediaqueries.phablet`
    max-width: 100%;
    padding: 10px 15px 10px;
  `}
`;

const MetaData = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${(p) => p.theme.colors.primary};

  ${(p) =>
    p.tags
      ? mediaqueries.phablet`
          max-width: 100%;
          padding: 0 20px;
        `
      : mediaqueries.phablet`
          max-width: 100%;
          padding: 0 20px 30px;
        `}
`;

const ArticleLink = styled(Link)`
  font-family: 'Inter';
  &:hover ${ImageContainer}, &:focus ${ImageContainer} {
    transform: translateY(-1px);
    box-shadow: 0 50px 80px -20px rgba(0, 0, 0, 0.27),
      0 30px 50px -30px rgba(0, 0, 0, 0.3);
  }

  &:hover h2,
  &:focus h2 {
    color: ${(p) => p.theme.colors.accent};
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -1.5%;
    top: -2%;
    width: 103%;
    height: 104%;
    border: 3px solid ${(p) => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  ${mediaqueries.phablet`
    &:hover ${ImageContainer} {
      transform: none;
      box-shadow: initial;
    }

    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`;

export default class ClientFetchingExample extends Component {
  render() {
    return (
      <Layout>
        <SEO />
        <Hero>
          <div className='author'>
            <h1 className='author__site-title'>Newsletter Issue - June 2021</h1>
          </div>
        </Hero>
        <br />
        <br />
        <Section narrow>
        <LocalContainer>
		<a href='name-changes-journals'>
<Flex mx={-2}>
  <Box width={1/2} px={3}>
	 <Image src={'https://i.imgur.com/pDGORZy.png'}></Image>
  </Box>
  <Box width={1/2} px={3}>
    <Text p={1}>
      <Title>Retroactive Name Change Policies in Scientific Journals</Title>
		<Excerpt>Although name changes are common, many scientific journals still lack comprehensive and appropriate policies to deal with them. This oversight has, and continues, to fail transgender people.
</Excerpt>
          <MetaData>
            Today · 5 min read
          </MetaData>
          <Tags>
				Akjakjfkj
          </Tags>
    </Text>
  </Box>
</Flex>
		</a>
		<HyvorTalk.Embed websiteId={1228} />
		  <br />
		  <br />
	       {<Subscription />}
		  </LocalContainer>
        </Section>  
      </Layout>
    );
  }
}
