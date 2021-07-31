import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
	 <div className={`menu-item ${selected ? 'active' : ''}`}>
			 <a href="june-2021">
			 <Card width={256} height={365.6}
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
				<Image src={imgsrc} />
	 <Heading 
	 sx={{
    fontSize: '2.2rem',
	 fontFamily: 'Merriweather',
    lineHeight: '1.3',
	 color: '#191449',
    margin: '1rem 0 2rem',
    borderBottom: '2px solid rgba(8,8,11,0.15)',
    paddingBottom: '.5rem',
    fontWeight: '500',
	 ':hover':{
		color: 'crimson',
	 },
	 }}>
	 June
	 </Heading>
				<Text color='#111'>Issue 19</Text>
			 </Card>
			 </a>
	 </div> 
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
});

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
