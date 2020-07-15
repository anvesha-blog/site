import React, { Component } from 'react';
import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from  "@components/Layout"
import styled from '@emotion/styled';
import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'

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
      border-radius: 10%;
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
  h2,h3 {
    font-size: 2.8rem;
	 font-family: Helvetica;
    line-height: 1.3;
    margin: 1rem 0 2rem;
    border-bottom: 2px solid rgba(8,8,11,0.15);
    padding-bottom: .5rem;
    font-weight: 500;
  }
  h3 {
    font-weight: 400;
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
	 color: #191449;
  }
`;

export default class ClientFetchingExample extends Component {
  render() {
    return (
      <Layout>
        <SEO />
        <Hero>
          <div className='author'>
            <img alt='Newsletters' className='author__logo' src={'https://i.imgur.com/BvD7wOes.png'} />
            <h1 className='author__site-title'>Newsletters</h1>
          </div>
        </Hero>
        <br />
        <br />
        <Section narrow>
        <LocalContainer>
          <h2>Archive</h2>
		  <Box
			 sx={{
				display: 'grid',
				gridGap: 3,
				gridRowGap: 5,
				gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
				margin: '2em 0',
		  }}>
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				borderRadius: 5,
				boxShadow: '0 0 16px rgba(0, 0, 0, 0.4)',
			 }}>
				<Image src={"https://i.imgur.com/xZqTSK5m.jpg"} />
				<Heading><a href="../june-2020"><Text>June 2020</Text></a></Heading>
				<Text color='#111'>Issue 10</Text>
			 </Card>
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				borderRadius: 5,
				boxShadow: '0 0 16px rgba(0, 0, 0, 0.4)',
			 }}>
				<Image src={"https://i.imgur.com/xZqTSK5.jpg"} />
				<Heading><a href="../may-2020"><Text>May 2020</Text></a></Heading>
				<Text color='#111'>Issue 9</Text>
			 </Card>
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				borderRadius: 5,
				boxShadow: '0 0 16px rgba(0, 0, 0, 0.4)',
			 }}>
				<Image src={"https://i.imgur.com/x0e9spD.jpg"} />
				<Heading><a href="../april-2020">April 2020</a></Heading>
				<Text color='#111'>Issue 8</Text>
			 </Card>
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				borderRadius: 5,
				boxShadow: '0 0 16px rgba(0, 0, 0, 0.4)',
			 }}>
				<Image src={"https://i.imgur.com/3cW94io.jpg"} />
				<Heading as='h3'><a href="../covid-pamphlet">COVID Pamphlet</a></Heading>
				<Text color='#111'>Special Issue</Text>
			 </Card>
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				borderRadius: 5,
				boxShadow: '0 0 16px rgba(0, 0, 0, 0.4)',
			 }}>
				<Image src={"https://i.imgur.com/5ApJh0X.jpg"} />
				<Heading><a href="../march-2020">March 2020</a></Heading>
				<Text color='#111'>Issue 7</Text>
			 </Card>
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				borderRadius: 5,
				boxShadow: '0 0 16px rgba(0, 0, 0, 0.4)',
			 }}>
				<Image src={"https://i.imgur.com/SedbMNh.png"} />
				<Heading><a href="../febraury-2020">Febraury 2020</a></Heading>
				<Text color='#111'>Issue 6</Text>
			 </Card>
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				borderRadius: 5,
				boxShadow: '0 0 16px rgba(0, 0, 0, 0.4)',
			 }}>
				<Image src={"https://i.imgur.com/7SVXQgMm.jpg"} />
				<Heading><a href="../january-2020">January 2020</a></Heading>
				<Text color='#111'>Issue 5</Text>
			 </Card>
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				borderRadius: 5,
				boxShadow: '0 0 16px rgba(0, 0, 0, 0.4)',
			 }}>
				<Image src={"https://i.imgur.com/a2xgTKF.jpg"} />
				<Heading><a href="../december-2019">December 2019</a></Heading>
				<Text color='#111'>Issue 4</Text>
			 </Card>
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				borderRadius: 5,
				boxShadow: '0 0 16px rgba(0, 0, 0, 0.4)',
			 }}>
				<Image src={"https://i.imgur.com/rRel9wF.jpg"} />
				<Heading><a href="../november-2019">November 2019</a></Heading>
				<Text color='#111'>Issue 3</Text>
			 </Card>
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				borderRadius: 5,
				boxShadow: '0 0 16px rgba(0, 0, 0, 0.4)',
			 }}>
				<Image src={"https://i.imgur.com/zSbNHc0.jpg"} />
				<Heading><a href="../october-2019">October 2019</a></Heading>
				<Text color='#111'>Issue 2</Text>
			 </Card>
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				borderRadius: 5,
				boxShadow: '0 0 16px rgba(0, 0, 0, 0.4)',
			 }}>
				<Image src={"https://i.imgur.com/ywhAmBr.jpg"} />
				<Heading><a href="../september-2019">September 2019</a></Heading>
				<Text color='#111'>Issue 1</Text>
			 </Card>
		  </Box>  
        </LocalContainer>
        </Section>
      </Layout>
    );
  }
}
