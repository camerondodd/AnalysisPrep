import React from 'react';
import Header from './header';
import Term from './term';
import './definitions.css';

export default class Definitions extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<div  className="DefContainer">
					<table>
						<tr>
							<th>Term</th>
							<th>Definition</th>
						</tr>
						<Term term="Standard Deviation" def="Summary measure of variation or spread of a set of data. Shows the most common distance from mean" />

					</table>
				</div>
			</div>
		);			
	};
}