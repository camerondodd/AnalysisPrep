import React from 'react';
import Header from './header';
import './info.css';
import ToggleDisplay from 'react-toggle-display';

export default class Info extends React.Component{
	constructor(){
		super();
		this.state={
			q1:false,
			contact:false
		};
	};
		handleClickQ1(){
		this.setState({
			q1: !this.state.q1,
			contact: false
		});
	};
		handleClickContact(){
		this.setState({
			q1: false,
			contact: !this.state.contact
		});
	};
	render(){
		return(
			<div>
				<Header />
				<div  className="InfoContainer">
					<div className="Question" onClick={()=>this.handleClickQ1()}>
						<h3>What is AnalysisPrep?</h3>
					</div>
					<ToggleDisplay show={this.state.q1}>
					<div className="Answer">
						<p>An application designed to save hours of prep work before an analysis is run.</p>
						<p>It helps the user select the appropriate analysis, meet all assumptions, and perform some basic calculcations.</p>
					</div>
					</ToggleDisplay>
					<div className="Question" onClick={()=>this.handleClickContact()}>
						<h3>Contact</h3>
					</div>
					<ToggleDisplay show={this.state.contact}>
					<div className="Answer">
						<a href="mailto:idlepython@gmail.com">idlepython@gmail.com</a>
					</div>
					</ToggleDisplay>
				</div>
			</div>
		);			
	};
}