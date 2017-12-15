import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default class Nav extends React.Component{
	render(){
		return(
			<div className="navList">
				<ul className="navUl">
					<li className="navLi">
						<p><Link className="link" to="/">AnalysisFinder</Link></p>
					</li>
					<li className="navLi">
						<p><Link className="link" to="/calc">Calculators</Link></p>	
					</li>
					<li className="navLi">
						<p><Link className="link" to="/definitions">Definitions</Link></p>	
					</li>
					<li className="navLi">
						<p><Link className="link" to="/info">Information</Link></p>	
					</li>
				</ul>
			</div>
		);			
	};
};