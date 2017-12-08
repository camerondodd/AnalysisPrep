import React from 'react';
import CalcInput from './calc-input';
import CalcOutput from './calc-output';
import './sample-calc.css';
import ToggleDisplay from 'react-toggle-display';

export default class SampleCalc extends React.Component {
	constructor(props){
		super(props);
		this.state={
			Z:1.96,
			SD:10,
			MOE:10,
			show:false
		};
	};
	handleClick(){
		this.setState({
			show: !this.state.show
		});
	};
	setZ(Z){
		this.setState({
			Z
		});
	};
	setSD(SD){
		this.setState({
			SD
		});
	};
	setMOE(MOE){
		this.setState({
			MOE
		});
	};
	render(){
		const base = ((this.state.Z * this.state.SD)/this.state.MOE);
		const N = Math.pow(base,2);
		return(
			<div className='CalcContainer'>
				<div className="TitleContainer">
					<h2 onClick={()=>this.handleClick()}>Minimum Sample Size</h2>
				</div>
				<ToggleDisplay show={this.state.show}>
				<h3>Common Confidence-z Values</h3>
				<h4>(Assuming Normality)</h4>
				<div className="left">
					<h4>Confidence</h4>
					<p>80%</p>
					<p>90%</p>
					<p>95%</p>
					<p>98%</p>
					<p>99%</p>
				</div>
				<div className="right">
					<h4>z*-value</h4>
					<p>1.28</p>
					<p>1.65</p>
					<p>1.96</p>
					<p>2.33</p>
					<p>2.58</p>
				</div>
				<div className="clear"></div>
				<form>
					<CalcInput id="Z" label="z" min={-3.40} step={.01} value={this.state.Z} onChange={value => this.setZ(value)} />
					<CalcInput id="SD" label="Standard Deviation" min={0} step={1} value={this.state.SD} onChange={value => this.setSD(value)} />
					<CalcInput id="MOE" label="Margin of Error" min={0} step={1} value={this.state.MOE} onChange={value => this.setMOE(value)} />
					<CalcOutput id="N" label="Minimum Sample Size(n) = " value={N.toFixed(1)} />
				</form>
				</ToggleDisplay>
			</div>
		)
	}
}