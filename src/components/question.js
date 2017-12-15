import React from 'react';
import ToggleDisplay from 'react-toggle-display';
import './question.css';

export default function Question(props){
	
	return(
			<ToggleDisplay show={props.display}>
				<div className="AnalysisQuestion">
					<h2>{props.q}</h2>
					<button className="AnswerButton" onClick={props.f1}>{props.a1}</button>
					<button className="AnswerButton" onClick={props.f2}>{props.a2}</button>
					<p className="StartOver" onClick={props.StartOver}>Start Over?</p>
				</div>
			</ToggleDisplay>
	);
}