import React from 'react';
import Nav from './nav';
import {Link} from 'react-router-dom';
import './home.css';

export default class Home extends React.Component{
	render(){
		return(
			<div className="home">
				<div className="videoContainer">
					<video poster="./calc5.jpeg" className="background-video" loop autoPlay="autoPlay">
					    <source src="./calcVid.mp4" type="video/mp4" />
					    Your browser does not support the video tag.
					</video>
					
				</div>
				<div className="homeTint">
				</div>
				<div className="homeContainer">
					<Nav />
					<h1 className="title">Analysis Prep</h1>
					<p className="textButton">Let us help you start running analyses faster!</p>
					<p><Link className="startButton" to="/analysisfinder">Start</Link></p>
				</div>
				<div className="what">
					<div className="whatText">
						<h2 className="whatHeader">What is Analysis Prep?</h2>
						<p>Anyone in the data science community can tell you that it often takes longer to figure out what analysis to run than to actually run it.  Even after you know what you should run, you still need to look up the assumptions that need to be met and see if you meet them by doing things like calculating the required N.</p>
						<p>Analysis Prep contains the most comprehensive guide in the field, with 30+ different analyses, and a quick easy process to find out which is right for you.  Want to know more? Check out the Information section.</p>
						<p><Link className="whatButton" to="/info">Learn More</Link></p>	
					</div>
					<div className="whatImg"></div>
				</div>
				<div className="clear"></div>
				<div className="with">
					<div className="withImg">
						<video poster="./calc2.jpeg" className="withVid" loop autoPlay="autoPlay">
					    <source src="./hammer.mp4" type="video/mp4" />
					    Your browser does not support the video tag.
						</video>
					</div>
					<div className="withText">
						<h2 className="withHeader">What tools are available?</h2>
						<p>Before you can run anything, you need to make sure that your sample size is big enough.  There are many ways to calculate the required N, and it changes based on what information you have. There are techniques like bootstrapping, but they can reduce variance through resampling and should not be used unless you need them. </p>
						<p>Analsis Prep has not one, but two different N calculators, to make sure that you have the right tool for the job based on your data.</p>
						<p><Link className="withButton" to="/calc">Calculate</Link></p>
					</div>
				</div>
				<div className="clear"></div>
				<div className="needDef">
					<div className="needDefText">
						<h2 className="needDefHeader">New Word?</h2>
						<p>Data Science is an ever-expanding field, and many people from different backgrounds use it to go different places.  This means that there is a lot of terminology and it changes regularly.</p>
						<p>To help you with this, we have collected the most common jargon and compiled it into a nice easy to understand dictionary for you.</p>
						<p><Link className="needDefButton" to="/definitions">Terminology</Link></p>	
					</div>
					<div className="needDefImg">
						<video poster="calc8.jpeg" className="withVid" loop autoPlay="autoPlay">
					    <source src="./book.mp4" type="video/mp4" />
					    Your browser does not support the video tag.
						</video>
					</div>
				</div>
				<div className="clear"></div>
				<div className="quote">
					<div className="quoteImg"></div>
					<div className="quoteText">
						<h3 className="quoteHeader">"The best investment is in the tools of one's own trade."</h3>
						<h4>~Benjamin Franklin</h4>
					</div>
				</div>
				<div className="clear"></div>
				<div className="closing">
					<div className="closingText">
						<h2 className="closingHeader">Ready to get started?</h2>
						<p>There is no time like the present!</p>
						<p><Link className="closingButton" to="/analysisfinder">Begin</Link></p>
					</div>
					
				</div>
				<div className="clear"></div>


			</div>

		);			
	};
}




				