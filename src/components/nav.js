import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default class Nav extends React.Component{
	render(){
		return(
			<div className="navList">
				<ul>
					<li>
						<p><Link className="link" to="/">AnalysisFinder</Link></p>
					</li>
					<li>
						<p><Link className="link" to="/calc">Calculator</Link></p>	
					</li>
					<li>
						<p><Link className="link" to="/definitions">Definitions</Link></p>	
					</li>
					<li>
						<p><Link className="link" to="/info">Information</Link></p>	
					</li>
				</ul>
			</div>
		);			
	};
};