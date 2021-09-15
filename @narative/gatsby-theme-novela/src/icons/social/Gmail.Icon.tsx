import React from 'react';

import { Icon } from '@types';

const GmailIcon: Icon = ({ fill = "white" }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="17px"
    height="17px"
    viewBox="0 0 512 512"
  >
	<g>
		<path fill={fill} d="M464,64h-16H64H48C21.504,64,0,85.504,0,112v16v256v16c0,26.496,21.504,48,48,48h16h384h16c26.496,0,48-21.504,48-48v-16
			V128v-16C512,85.504,490.496,64,464,64z M407.488,96L256,215.616L104.512,96H407.488z M448,416H64V148.672l192,147.68L448,148.64
			V416z"/>
	</g>
</svg>
);

export default GmailIcon;