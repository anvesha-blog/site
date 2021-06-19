import React, { Component } from 'react';
import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from  "@components/Layout"
import styled from '@emotion/styled';
import Subscription from '@components/Subscription';
import HyvorTalk from 'hyvor-talk-react';
import { Button } from 'rebass';

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

export default class ClientFetchingExample extends Component {
  render() {
    return (
      <Layout>
        <SEO />
        <Hero>
          <div className='author'>
            <h1 className='author__site-title'>Newsletter Issue - October 2019</h1>
          </div>
        </Hero>
        <br />
        <br />
        <Section narrow>
        <LocalContainer>
		<div style={{"display": "grid", "justify-content":"center"}}>
        <Button mr={2} bg='track'
			 sx={{
			 ':hover': {
			 backgroundColor: 'buttonColored',
			 }
			 }}>
		  <a href="https://drive.google.com/uc?id=1hb5gLb0EigfQunR10PZqsgNawMIAX4Nr&export=download">
		  <h3>Download</h3>
		  </a>
		  </Button>
		</div>
        <br />
        <br />
		  <iframe title="October-2019" src="https://drive.google.com/file/d/1hb5gLb0EigfQunR10PZqsgNawMIAX4Nr/preview" width="100%" height="800" frameborder="0" allowfullscreen="true"></iframe>
		  &nbsp;
		  &nbsp;
		  &nbsp;
		  &nbsp;
		  &nbsp;
		  &nbsp;
		  <br />
		  <br />
		  <br />
		  <br />	
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
