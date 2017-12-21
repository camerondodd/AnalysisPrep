import React from 'react';
import ToggleDisplay from 'react-toggle-display';
import './question.css';

export default function Question(props){
	
	return(
			<ToggleDisplay show={props.display}>
				<div className="AnalysisQuestion">
					<h2>{props.q}</h2>
					<h3 onClick={props.ex} className="clar">Clarification</h3>
						<ToggleDisplay show={props.exDis}>
							<h4>{props.e1}</h4>
						</ToggleDisplay>
					<button className="AnswerButton" onClick={props.f1}>{props.a1}</button>
					<button className="AnswerButton" onClick={props.f2}>{props.a2}</button>
					<p className="StartOver" onClick={props.StartOver}>Start Over?</p>
				</div>
			</ToggleDisplay>
	);
}