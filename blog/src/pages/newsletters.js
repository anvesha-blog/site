import React, { Component } from 'react';
import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from  "@components/Layout"
import styled from '@emotion/styled';
import Subscription from '@components/Subscription';
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

	 &:hover{
		color: crimson;
	 }
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
            <h1 className='author__site-title'>Newsletters Archive</h1>
          </div>
        </Hero>
        <br />
        <br />
        <Section narrow>
        <LocalContainer>
		  <Box
			 sx={{
				display: 'grid',
				justifyContent: 'center',
				gridGap: 3,
				gridRowGap: 5,
				gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
				margin: '2em 0',
		  }}>
			  <a href="../march-2021">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/l0D5mOP.jpg"} />
				<Heading>March 2021</Heading>
				<Text color='#111'>Issue 17</Text>
			 </Card>
			 </a>
			  <a href="../january-2021">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/eAnwwEV.jpg"} />
				<Heading>January 2021</Heading>
				<Text color='#111'>Issue 16</Text>
			 </Card>
			 </a>
			 <a href="../december-2020">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/TXaO813.png"} />
				<Heading>December 2020</Heading>
				<Text color='#111'>Issue 15</Text>
			 </Card>
			 </a>
			 <a href="../october-2020">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/p235RT8.png"} />
				<Heading>October 2020</Heading>
				<Text color='#111'>Issue 14</Text>
			 </Card>
			 </a>
             <a href="../september-2020">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/hVdRsAV.png"} />
				<Heading>September 2020</Heading>
				<Text color='#111'>Issue 13</Text>
			 </Card>
			 </a>
			 <a href="../august-2020">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/ua9LB5H.png"} />
				<Heading>August 2020</Heading>
				<Text color='#111'>Issue 12</Text>
			 </Card>
			 </a>
             <a href="../july-2020">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/B3jHAqP.jpg"} />
				<Heading>July 2020</Heading>
				<Text color='#111'>Issue 11</Text>
			 </Card>
			 </a>
			 <a href="../june-2020">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/1Uqwy5y.jpg"} />
				<Heading>June 2020</Heading>
				<Text color='#111'>Issue 10</Text>
			 </Card>
			 </a>
		    <a href="../may-2020">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/xZqTSK5.jpg"} />
				<Heading>May 2020</Heading>
				<Text color='#111'>Issue 9</Text>
			 </Card>
			 </a>
			 <a href="../april-2020">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/x0e9spD.jpg"} />
				<Heading>April 2020</Heading>
				<Text color='#111'>Issue 8</Text>
			 </Card>
			 </a>
			 <a href="../covid-pamphlet">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/3cW94io.jpg"} />
				<Heading as='h3'>COVID Pamphlet</Heading>
				<Text color='#111'>Special Issue</Text>
			 </Card>
			 </a>
			 <a href="../march-2020">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/5ApJh0X.jpg"} />
				<Heading>March 2020</Heading>
				<Text color='#111'>Issue 7</Text>
			 </Card>
			 </a>
			 <a href="../february-2020">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/SedbMNh.png"} />
				<Heading>February 2020</Heading>
				<Text color='#111'>Issue 6</Text>
			 </Card>
			 </a>
			 <a href="../january-2020">
			 <Card width={256} height={351.4}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/7SVXQgM.jpg?1"} />
				<Heading>January 2020</Heading>
				<Text color='#111'>Issue 5</Text>
			 </Card>
			 </a>
			 <a href="../december-2019">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/a2xgTKF.jpg"} />
				<Heading>December 2019</Heading>
				<Text color='#111'>Issue 4</Text>
			 </Card>
			 </a>
			 <a href="../november-2019">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/rRel9wF.jpg"} />
				<Heading>November 2019</Heading>
				<Text color='#111'>Issue 3</Text>
			 </Card>
			 </a>
			 <a href="../october-2019">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/zSbNHc0.jpg"} />
				<Heading>October 2019</Heading>
				<Text color='#111'>Issue 2</Text>
			 </Card>
			 </a>
			 <a href="../september-2019">
			 <Card width={256}
			 sx={{
				p: 2,
				bg: '#dddddd',
				zIndex: '0',
				overflow: 'hidden',
				borderRadius: 5,
				border: '1px solid #dddddd',
				boxShadow: '0px 0px 2px rgba(38, 38, 38, 0.2)',
				':hover':{
				  transition: 'all 0.2s ease-out',
				  boxShadow: '0px 4px 8px rgba(58, 58, 58, 0.5)',
				  top: '-4px',
				  border: '1px solid #cccccc',
				  backgroundColor: 'white',
				},
				':before':{
				  content: "",
				  zIndex: '-1',
   			  background: '#00838d',
   			  borderRadius: '32px',
   			  transform: 'scale(2)',
   			  transformOrigin: '50% 50%',
   			  transition: 'transform 0.15s ease-out',
				 },
				':hover:before':{
				  transform: 'scale(2.15)',
				 },
			 }}>
				<Image src={"https://i.imgur.com/ywhAmBr.jpg"} />
				<Heading>September 2019</Heading>
				<Text color='#111'>Issue 1</Text>
			 </Card>
			 </a>
		  </Box>  
		  <br />
		  <br />
				{<Subscription />}
        </LocalContainer>
        </Section>
      </Layout>
    );
  }
}
