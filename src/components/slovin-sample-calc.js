import React from 'react';
import CalcInput from './calc-input';
import CalcOutput from './calc-output';
import './sample-calc.css';
import ToggleDisplay from 'react-toggle-display';

export default class SlovinSampleCalc extends React.Component {
	constructor(props){
		super(props);
		this.state={
			a:0.05,
			P:1000,
			show:false
		};
	};
	handleClick(){
		this.setState({
			show: !this.state.show
		});
	};
	setA(a){
		this.setState({
			a
		});
	};
	setP(P){
		this.setState({
			P
		});
	};
	render(){
		const aSquared = Math.pow(this.state.a,2);
		const N = this.state.P/(1+this.state.P * aSquared);
		return(
			<div className="CalcContainer">
				<div className="TitleContainer">
					<h2 onClick={()=>this.handleClick()}>Slovins Sample Size</h2>
				</div>
				<ToggleDisplay show={this.state.show}>
					<h3>Common Alpha Values</h3>
					<div className="left">
						<h4>Confidence</h4>
						<p>80%</p>
						<p>90%</p>
						<p>95%</p>
						<p>98%</p>
						<p>99%</p>
					</div>
					<div className="right">
						<h4>a-value</h4>
						<p>0.20</p>
						<p>0.10</p>
						<p>0.05</p>
						<p>0.02</p>
						<p>0.01</p>
					</div>
					<div className="clear"></div>
					<form>
						<CalcInput id="a" label="a" min={.01} step={.01} value={this.state.a} onChange={value => this.setA(value)} />
						<CalcInput id="P" label="Population" min={1} step={1} value={this.state.P} onChange={value => this.setP(value)} />
						<CalcOutput id="N" label="Minimum Sample Size(n) = " value={N.toFixed(1)} />
					</form>
				</ToggleDisplay>
			</div>
		)
	}
}