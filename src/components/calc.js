import React from 'react';
import Header from './header';
import SampleCalc from './sample-calc';
import SlovinSampleCalc from './slovin-sample-calc';
import './calc.css';

export default class Calc extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<SampleCalc />
				<SlovinSampleCalc />
			</div>
		);			
	};
}