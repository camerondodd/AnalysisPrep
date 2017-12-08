import React from 'react';
import './calc-input.css';

export default function CalcInput(props){
	return(
		<div>
			<label htmlFor={props.id}>{props.label} </label>
			<input type="number" step={props.step} id={props.id} min={props.min} onChange={e => props.onChange(e.target.value)} value={props.value} />
		</div>
	)
}