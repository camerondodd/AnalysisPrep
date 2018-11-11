import React from 'react';
import Nav from './nav';
import './header.css';

export default class Header extends React.Component{
	render(){
		return(
			<div className="header">
				<span className="headerTitle">Analysis Prep</span>
				<Nav/>
			</div>
		);			
	};
}