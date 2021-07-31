import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './App.css';
import styled from '@emotion/styled';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'

let list = [
  { postlink: '../', imgsrc: 'https://i.imgur.com/rhdVImv.jpg', month: 'June 2021', number: '20' },
  { postlink: '../may-2021/', imgsrc: 'https://i.imgur.com/qGrbcHa.png', month: 'May 2021', number: '19' },
  { postlink: '../april-2021/', imgsrc: 'https://i.imgur.com/2PoJjgI.jpg', month: 'April 2021', number: '18' },
  { postlink: '../march-2021/', imgsrc: 'https://i.imgur.com/l0D5mOP.jpg', month: 'March 2021', number: '17' },
  { postlink: '../janaury-2021/', imgsrc: 'https://i.imgur.com/eAnwwEV.jpg', month: 'January 2021', number: '16' },
  { postlink: '../december-2020/', imgsrc: 'https://i.imgur.com/TXaO813.png', month: 'December 2020', number: '15' },
  { postlink: '../october-2020/', imgsrc: 'https://i.imgur.com/p235RT8.png', month: 'October 2020', number: '14' },
  { postlink: '../september-2020/', imgsrc: 'https://i.imgur.com/hVdRsAV.png', month: 'September 2020', number: '13' },
  { postlink: '../august-2020/', imgsrc: 'https://i.imgur.com/ua9LB5H.png', month: 'August 2020', number: '12' },
  { postlink: '../july-2020/', imgsrc: 'https://i.imgur.com/B3jHAqP.jpg', month: 'July 2020', number: '11' },
  { postlink: '../june-2020/', imgsrc: 'https://i.imgur.com/1Uqwy5y.jpg', month: 'June 2020', number: '10' },
  { postlink: '../may-2020/', imgsrc: 'https://i.imgur.com/xZqTSK5.jpg', month: 'May 2020', number: '9' },
  { postlink: '../april-2020/', imgsrc: 'https://i.imgur.com/x0e9spD.jpg', month: 'April 2020', number: '8' },
  { postlink: '../march-2020/', imgsrc: 'https://i.imgur.com/5ApJh0X.jpg', month: 'March 2020', number: '7' },
  { postlink: '../febraury-2020/', imgsrc: 'https://i.imgur.com/SedbMNh.png', month: 'Febraury 2020', number: '6' },
  { postlink: '../january-2020/', imgsrc: 'https://i.imgur.com/7SVXQgM.jpg?1', month: 'January 2020', number: '5' },
  { postlink: '../december-2019/', imgsrc: 'https://i.imgur.com/a2xgTKF.jpg', month: 'December 2019', number: '4' },
  { postlink: '../november-2019/', imgsrc: 'https://i.imgur.com/rRel9wF.jpg', month: 'November 2019', number: '3' },
  { postlink: '../october-2019/', imgsrc: 'https://i.imgur.com/zSbNHc0.jpg', month: 'October 2019', number: '2' },
  { postlink: '../september-2019/', imgsrc: 'https://i.imgur.com/ywhAmBr.jpg', month: 'September 2019', number: '1' },
];

// eslint-disable-next-line react/prop-types
const MenuItem = ({ postlink, imgsrc, month, number, selected }) => {
  return ( 
	 <div className={`menu-item ${selected ? 'active' : ''}`}>
			 <a href={postlink}>
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
	 {month}
	 </Heading>
				<Text color='#111'>Issue {number}</Text>
			 </Card>
			 </a>
	 </div> 
  );
};

export const Menu = (list, selected) =>
  list.map(el => {
    //const { postlink, imgsrc, month, number } = el;
    const onClick = () => console.log('original onClick ', postlink);
    return (
      <MenuItem postlink={el.postlink} imgsrc={el.imgsrc} month={el.month} number={el.number} selected={selected} onClick={onClick} />
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
export const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
//export const ArrowLeft = FaArrowAltCircleLeft;
//export const ArrowRight = FaArrowAltCircleRight;

class App extends Component {
  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: list.length,
    scrollToSelected: true,
    translate: undefined,
    transition: 0.5,
    wheel: true,
    showList: true,
    inertiascrolling: true,
    slowdownFactor: 0.25,
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew && this.menu) {
      this.menu.setInitial();
      this.menu.forceUpdate();
      this.forceUpdate();
    }
  }

  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  };

  onFirstItemVisible = () => {
    console.log('first item is visible');
  };

  onLastItemVisible = () => {
    console.log('last item is visible');

    const newItems = Array(5)
      .map((el, ind) => ({ name: `item${list.length + ind + 1}` }));
    list = list.concat(newItems)
    this.menuItems = Menu(
      list,
      list.slice(-1)[0].name,
    );
    this.setState({
      itemsCount: list.length,
      selected: this.state.selected,
    });
  };

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  };

  setItemsCount = ev => {
    const { itemsCount = list.length, selected } = this.state;
    const val = +ev.target.value;
    const itemsCountNew =
      !isNaN(val) && val <= list.length && val >= 0
        ? +ev.target.value
        : list.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
      this.setState({
        itemsCount: itemsCountNew,
      });
    }
  };

  setSlowdownFactor = ev => {
    this.setState({ slowdownFactor: ev.target.value });
  };

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  };

  toggle = () => {
    this.setState({ showList: !this.state.showList });
  };

  render() {
    const {
      alignCenter,
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      itemsCount,
      selected,
      translate,
      transition,
      wheel,
      showList,
      scrollToSelected,
      inertiascrolling,
      slowdownFactor,
    } = this.state;

    const menu = this.menuItems;

    const checkboxStyle = {
      margin: '5px 10px',
    };
    const valueStyle = {
      margin: '5px 10px',
      display: 'inline-block',
    };

    return (
      <div className="App">
		{
        //<header className="App-header">
          //<h1 className="App-title">React horizontal scrolling menu</h1>
        //</header>
        //<p className="App-intro">
          //Horizontal scrolling menu example. Click arrow or drag items.
        //</p>

        //<button onClick={this.toggle}>Toggle Show/hide</button>
		}

        {showList && (
          <ScrollMenu
            alignCenter={alignCenter}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            clickWhenDrag={clickWhenDrag}
            data={menu}
            dragging={dragging}
            hideArrows={hideArrows}
            hideSingleArrow={hideSingleArrow}
            inertiaScrolling={inertiascrolling}
            inertiaScrollingSlowdown={slowdownFactor}
            onFirstItemVisible={this.onFirstItemVisible}
            onLastItemVisible={this.onLastItemVisible}
            onSelect={this.onSelect}
            onUpdate={this.onUpdate}
            ref={el => (this.menu = el)}
            rtl={false}
            scrollBy={1}
            scrollToSelected={scrollToSelected}
            selected={selected}
            transition={+transition}
            translate={translate}
            useButtonRole={true}
            wheel={wheel}
          />
        )}
      </div>
    );
  }
}

export default App;
