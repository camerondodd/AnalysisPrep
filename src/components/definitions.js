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
							<th className="term">Term</th>
							<th className="def">Definition</th>
						</tr>
						<Term term="Alpha(a)" def="Probability of rejecting the hypothesis incorrectly" />
						<Term term="Association" def="Relationship between two, or more, variables"  />
						<Term term="Assumption" def="A condition that must be met before a certain analysis can be run" />
						<Term term="Case" def="One object or instance in a collection, often a person.  One case can have many variables"  />
						<Term term="Categorical" def="A variable that has a fixed number of values"  />
						<Term term="Continuous" def="A variable that can take any value between its minimum or maximum"  />
						<Term term="Dependent Variable (DV)" def="The variable being measured (outcome variable)" />
						<Term term="Homogeneity" def="Is Homoscedasticity for ANOVAs"  />
						<Term term="Homoscedasticity" def="Making sure you have the same amount of variance across all variables" />
						<Term term="Independence" def="The probability of one even occuring has no impact on the probability of another event occuring" />
						<Term term="Independent Variable (IV)" def="The variable being maninpulated (experimental variable)" />
						<Term term="Level" def="Different stages or groupings or IV or DV"  />
						<Term term="Linearity" def="The ability to graph the data in a straight line" />
						<Term term="Logit" def="The log of the odds (L=ln(p/(1-p)) where L is the logit and p is the probability)"  />
						<Term term="Multicollinearity" def="When the correlations between two or more variables is high enough that one can predict the other. This skews the results in the regression model."/>
						<Term term="Normality" def="A normal distribution is a distribution of random data points that create a bell-curve with the most points around the mean" />
						<Term term="Outlier" def="A data point that is extremely disperate from other results enough to skew the over all data" />
						<Term term="Population" def="The entire group from which a sample is taken to be tested"  />
						<Term term="Residual (e)" def="The difference between the dependent variable and the independent variable in a regression model." />
						<Term term="Sample (n)" def="A sub-set of a population taken to represent the whole" />
						<Term term="Scale" def="A group of survey questions used to measure a particular concept" />
						<Term term="Sphericity" def="The condition if all variances of the differences between all combinations of levels are the same" />
						<Term term="Standard Deviation" def="Summary measure of variation or spread of a set of data. Shows the most common distance from mean" />
						<Term term="Variance" def="How far a dataset is spread out" />
					</table>
				</div>
			</div>
		);			
	};
}