import React from 'react';
import './calc-output.css';

export default function CalcOutput(props){
	return(
		<div className="Output">
			<label htmlFor={props.id}>{props.label}</label>
			<output id={props.id} aria-live="polite"> {props.value} </output>
		</div>
	)
}

CalcOutput.defaultProps= {
	value:0
};