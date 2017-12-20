import React from 'react';
import ToggleDisplay from 'react-toggle-display';
import './question.css';

export default function Question(props){
	
	return(
			<ToggleDisplay show={props.display}>
				<div className="AnalysisQuestion">
					<h2>{props.q}</h2>
					<button className="AnswerButton b1" onClick={props.f1}>{props.a1}</button>
					<h3 className="e1">{props.e1}</h3>
					<button className="AnswerButton b2" onClick={props.f2}>{props.a2}</button>
					<h3 className="e2">{props.e2}</h3>
					<p className="StartOver" onClick={props.StartOver}>Start Over?</p>
				</div>
			</ToggleDisplay>
	);
}