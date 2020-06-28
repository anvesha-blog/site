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
  margin-left: 20%;
  margin-right: 45%;
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
            <h1 className='author__site-title'>Newsletter Issue - May 2020</h1>
          </div>
        </Hero>
        <br />
        <br />
        <Section narrow>
        <LocalContainer>
		  <p style={{ align: 'center' }}><a href="https://drive.google.com/uc?id=1CNBAKf-r_-qW9v3oT_-_BcmyOolsj95E&export=download">Download this issue</a></p>
		  &nbsp;
		  &nbsp;
		  <iframe title="May-2020" src="https://drive.google.com/file/d/1CNBAKf-r_-qW9v3oT_-_BcmyOolsj95E/preview" width="200%" height="1000" frameborder="0"></iframe>
		  &nbsp;
		  &nbsp;
	 <div id="adobe-dc-view"></div>
<script src="https://documentcloud.adobe.com/view-sdk/main.js"></script>
<script type="text/javascript">
	document.addEventListener("adobe_dc_view_sdk.ready", function(){
		var adobeDCView = new AdobeDC.View({clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view"});
		adobeDCView.previewFile({
			content:{location: {url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"}},
			metaData:{fileName: "Bodea Brochure.pdf"}
		}, {defaultViewMode: "FIT_WIDTH"});
	});
</script>
		  &nbsp;
		  &nbsp;
        </LocalContainer>
        </Section>
      </Layout>
    );
  }
}
