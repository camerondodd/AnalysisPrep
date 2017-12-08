import React from 'react';
import Nav from './nav';
import './header.css';

export default class Header extends React.Component{
	render(){
		return(
			<div>
				<h1>AnalysisPrep</h1>
				<Nav />
			</div>
		);			
	};
}