import React from 'react';
import Header from './header';
import './analysis-finder.css';
import ToggleDisplay from 'react-toggle-display';

export default class AnalysisFinder extends React.Component{
	constructor(){
		super();
		this.state={
			title:true,
			q:false,
			qNum:false,
			qCat:false
		};
	};
	handleClickB(){
		this.setState({
			title:false,
			q:true
		});
	};
	handleClickStartOver(){
		this.setState({
			title:true,
			q:false,
			qNum:false,
			qCat:false
		});
	};
	handleClickQNum(){
		this.setState({
			q:false,
			qNum:true
		});
	};
	handleClickQCat(){
		this.setState({
			q:false,
			qCat:true
		});
	};
	render(){
		return(
			<div>
				<Header />
				<ToggleDisplay show={this.state.title}>
					<div className="content">
						<h2>AnalysisFinder</h2>
						<h3>AnalysisFinder will walk you through the process of selecting the appropriate analysis depending on your data and what you want to do with it</h3>
						<button onClick={()=>this.handleClickB()}>Click Here to Begin!</button>
					</div>
				</ToggleDisplay>
				<ToggleDisplay show={this.state.q}>
					<div className="AnalysisQuestion">
						<h2>Is your data numerical or categorical?</h2>
						<button onClick={()=>this.handleClickQNum()}>Numerical</button>
						<button onClick={()=>this.handleClickQCat()}>Categorical</button>
						<p className="StartOver" onClick={()=>this.handleClickStartOver()}>Start Over?</p>
					</div>
				</ToggleDisplay>
				<ToggleDisplay show={this.state.qNum}>
					<div className="AnalysisQuestion">
						<h2>Question Num</h2>
						<button>Answer 1</button>
						<button>Answer 2</button>
						<p className="StartOver" onClick={()=>this.handleClickStartOver()}>Start Over?</p>
					</div>
				</ToggleDisplay>
				<ToggleDisplay show={this.state.qCat}>
					<div className="AnalysisQuestion">
						<h2>Question Cat</h2>
						<button>Answer 1</button>
						<button>Answer 2</button>
						<p className="StartOver" onClick={()=>this.handleClickStartOver()}>Start Over?</p>
					</div>
				</ToggleDisplay>
			</div>
		);			
	};
}