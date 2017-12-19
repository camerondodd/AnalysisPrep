import React from 'react';
import Header from './header';
import './info.css';
import ToggleDisplay from 'react-toggle-display';

export default class Info extends React.Component{
	constructor(){
		super();
		this.state={
			q1:false,
			q2:false,
			contact:false
		};
	};
		handleClickQ1(){
		this.setState({
			q1: !this.state.q1,
			q2:false,
			contact: false
		});
	};
		handleClickQ2(){
		this.setState({
			q2: !this.state.q2,
			q1:false,
			contact: false
		});
	};
		handleClickContact(){
		this.setState({
			q1: false,
			q2:false,
			contact: !this.state.contact
		});
	};
	render(){
		return(
			<div>
				<Header />
				<div  className="InfoContainer">
					<div className="Question" onClick={()=>this.handleClickQ1()}>
						<h2>What is AnalysisPrep?</h2>
					</div>
					<ToggleDisplay show={this.state.q1}>
					<div className="Answer">
						<p>An application designed to save hours of prep work before an analysis is run.</p>
						<p>It helps the user select the appropriate analysis, check for all assumptions, look up some simple definitions and perform some basic calculcations, all in one place for the first time.</p>
					</div>
					</ToggleDisplay>

					<div className="Question" onClick={()=>this.handleClickQ2()}>
						<h2>Why use AnalysisPrep?</h2>
					</div>
					<ToggleDisplay show={this.state.q2}>
					<div className="Answer">
						<p>AnalysisPrep is the toolbox any analyst needs to get started.</p>
						<p>AnalysisFinder includes over 30 different analyses all in one place, which makes it the most comprehensive guide to date.  It also walks you through the difficult process of selecting the appropriate test for your data, which can be a struggle for students and veterans alike.</p>
						<p>Other guides often stop at selecting the analysis, but AnalysisFinder also includes a full list of assumptions that need to be met before the analysis can be run, saving the user the trouble of finding that themselves.</p>
						<p>After the user has found the analysis and met the assumptions, they can use the convenient calculators to find the minimum sample size, which can be a difficult process in and of itself.</p>
						<p>All the while, the list of common definitions supports the user as they make their way through the process.</p>
						<p>AnalysisPrep can save up to a day's worth of work with all of the tools needed to get the user ready to run their analysis.</p>
					</div>
					</ToggleDisplay>

					<div className="Question" onClick={()=>this.handleClickContact()}>
						<h2>Contact</h2>
					</div>
					<ToggleDisplay show={this.state.contact}>
					<div className="Answer Contact">
						<a href="mailto:idlepython@gmail.com">idlepython@gmail.com</a>
					</div>
					</ToggleDisplay>
				</div>
			</div>
		);			
	};
}