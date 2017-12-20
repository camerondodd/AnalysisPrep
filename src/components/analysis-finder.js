import React from 'react';
import Header from './header';
import './analysis-finder.css';
import ToggleDisplay from 'react-toggle-display';
import Question from './question';
import {API_BASE_URL} from '../config';
import axios from 'axios';

export default class AnalysisFinder extends React.Component{
	constructor(){
		super();
		this.state={
			Answer:{
				data:{
					ass:[]
				}
			},

			type:"None",
			purp:"None",
			IV:"None",
			DV:"None",
			CtP:"None",
			OT:"None",
			DVL:"None",
			IVL:"None",
			fact:"None",
			hier:"None",
			mod:"None",
			scale:"None",
			EFQ:"None",
			theory:"None",
			var:"None",
			DFA:"None",

			title:true,
			A:false,
			Q:false,
			QDes:false,
			QDesCont:false,

			QInf:false,
			QInfCat:false,
			QInfCatCat:false,
			QInfCatCatNo:false,
			QInfCatCatNoYes:false,
			QInfCatCont:false,
			QInfCatContS:false,
			QInfCatContSS:false,
			QInfCatContSM:false,
			QInfCatContM:false,
			QInfCont:false,
			QInfContCat:false,
			QInfContCatS:false,
			QInfContCatM:false,
			QInfContCont:false,
			QInfContContS:false,
			QInfContContSM:false,
			QInfContContSMMod:false,

			QAss:false,
			QAssYes:false,
			QAssYesNo:false,
			QAssNo:false,
			QAssNoNo:false,
			QAssNoNoS:false,
			QAssNoNoM:false,
		};
	};
	componentDidMount(){
		this.loadAnswer();
	};
	loadAnswer(){
		let search=`${this.state.type}/${this.state.purp}/${this.state.IV}/${this.state.CtP}/${this.state.OT}/${this.state.DVL}/${this.state.DV}/${this.state.IVL}/${this.state.fact}/${this.state.hier}/${this.state.mod}/${this.state.scale}/${this.state.EFQ}/${this.state.theory}/${this.state.var}/${this.state.DFA}`;
		axios.get(`${API_BASE_URL}api/${search}`)
			.then(res => {
				let Answer = res;
				this.setState({Answer})
			});
		console.log(this.state.Answer);
	};
	handleClickStart(){
		this.setState({
			title:false,
			Q:true
		});
	};
	StartOver(){
		this.setState({
			Answer:{
				data:{
					ass:[]
				}
			},

			type:"None",
			purp:"None",
			IV:"None",
			DV:"None",
			CtP:"None",
			OT:"None",
			DVL:"None",
			IVL:"None",
			fact:"None",
			hier:"None",
			mod:"None",
			scale:"None",
			EFQ:"None",
			theory:"None",
			var:"None",
			DFA:"None",

			title:true,
			A:false,
			Q:false,
			QDes:false,
			QDesCont:false,

			QInf:false,
			QInfCat:false,
			QInfCatCat:false,
			QInfCatCatNo:false,
			QInfCatCatNoYes:false,
			QInfCatCont:false,
			QInfCatContS:false,
			QInfCatContSS:false,
			QInfCatContSM:false,
			QInfCatContM:false,
			QInfCont:false,
			QInfContCat:false,
			QInfContCatS:false,
			QInfContCatM:false,
			QInfContCont:false,
			QInfContContS:false,
			QInfContContSM:false,
			QInfContContSMMod:false,

			QAss:false,
			QAssYes:false,
			QAssYesNo:false,
			QAssNo:false,
			QAssNoNo:false,
			QAssNoNoS:false,
			QAssNoNoM:false,
			
		});
	};
	QDes(){
		this.setState({
			Q:false,
			QDes:true,
			type:"Des"
		});
	};
		QDesCat(){
			this.setState({
				QDes:false,
				A:true,
				IV:"Cat"
			}, function afterStateChange(){
				this.loadAnswer();
			});
		};
		QDesCont(){
			this.setState({
				QDes:false,
				QDesCont:true,
				IV:"Cont"
			});
		};
			QDesContAvg(){
				this.setState({
					QDesCont:false,
					A:true,
					purp:"Avg"
				}, function afterStateChange(){
					this.loadAnswer();
				});
			};
			QDesContSpread(){
				this.setState({
					QDesCont:false,
					A:true,
					purp:"Spread"
				}, function afterStateChange(){
					this.loadAnswer();
				});
			};



	QInf(){
		this.setState({
			Q:false,
			QInf:true,
			type:"Inf"
		});
	};

		QInfCat(){
			this.setState({
				QInf:false,
				QInfCat:true,
				IV:"Cat"
			});
		};
			QInfCatCat(){
			this.setState({
				QInfCat:false,
				QInfCatCat:true,
				DV:"Cat"
				});
			};
				QInfCatCatYes(){
				this.setState({
					QInfCatCat:false,
					A:true,
					CtP:"Yes"
					}, function afterStateChange(){
						this.loadAnswer();
					});
				};
				QInfCatCatNo(){
				this.setState({
					QInfCatCat:false,
					QInfCatCatNo:true,
					CtP:"No"
					});
				};
					QInfCatCatNoYes(){
					this.setState({
						QInfCatCatNo:false,
						QInfCatCatNoYes:true,
						OT:"Yes"
						});
					};
						QInfCatCatNoYesYes(){
						this.setState({
							QInfCatCatNoYes:false,
							A:true,
							DVL:"More"
							}, function afterStateChange(){
								this.loadAnswer();
							});
						};
						QInfCatCatNoYesNo(){
						this.setState({
							QInfCatCatNoYes:false,
							A:true,
							DVL:"One"
							}, function afterStateChange(){
								this.loadAnswer();
							});
						};
					QInfCatCatNoNo(){
					this.setState({
						QInfCatCatNo:false,
						A:true,
						OT:"No"
						}, function afterStateChange(){
							this.loadAnswer();
						});
					};
			QInfCatCont(){
			this.setState({
				QInfCat:false,
				QInfCatCont:true,
				DV:"Cont"
				});
			};
				QInfCatContS(){
				this.setState({
					QInfCatCont:false,
					QInfCatContS:true,
					DV:"ContS"
					});
				};
					QInfCatContSS(){
					this.setState({
						QInfCatContS:false,
						QInfCatContSS:true,
						IVL:"One"
						});
					};
						QInfCatContSSYes(){
						this.setState({
							QInfCatContSS:false,
							A:true,
							OT:"Yes"
							}, function afterStateChange(){
								this.loadAnswer();
							});
						};
						QInfCatContSSNo(){
						this.setState({
							QInfCatContSS:false,
							A:true,
							OT:"No"
							}, function afterStateChange(){
								this.loadAnswer();
							});
						};
					QInfCatContSM(){
					this.setState({
						QInfCatContS:false,
						QInfCatContSM:true,
						IVL:"More"
						});
					};
						QInfCatContSMYes(){
						this.setState({
							QInfCatContSM:false,
							A:true,
							fact:"Yes"
							}, function afterStateChange(){
								this.loadAnswer();
							});
						};
						QInfCatContSMNo(){
						this.setState({
							QInfCatContSM:false,
							A:true,
							fact:"No"
							}, function afterStateChange(){
								this.loadAnswer();
							});
						};
				QInfCatContM(){
				this.setState({
					QInfCatCont:false,
					QInfCatContM:true,
					DV:"ContM"
					});
				};
					QInfCatContMYes(){
					this.setState({
						QInfCatContM:false,
						A:true,
						fact:"Yes"
						}, function afterStateChange(){
							this.loadAnswer();
						});
					};
					QInfCatContMNo(){
					this.setState({
						QInfCatContM:false,
						A:true,
						fact:"No"
						}, function afterStateChange(){
							this.loadAnswer();
						});
					};
		QInfCont(){
			this.setState({
				QInf:false,
				QInfCont:true,
				IV:"Cont"
			});
		};
			QInfContCat(){
				this.setState({
					QInfCont:false,
					QInfContCat:true,
					DV:"Cat"
				});
			};
				QInfContCatS(){
					this.setState({
						QInfContCat:false,
						QInfContCatS:true,
						DVL:"One"
					});
				};
					QInfContCatSYes(){
						this.setState({
							QInfContCatS:false,
							A:true,
							hier:"Yes"
						}, function afterStateChange(){
							this.loadAnswer();
						});
					};
					QInfContCatSNo(){
						this.setState({
							QInfContCatS:false,
							A:true,
							hier:"No"
						}, function afterStateChange(){
							this.loadAnswer();
						});
					};
				QInfContCatM(){
					this.setState({
						QInfContCat:false,
						QInfContCatM:true,
						DVL:"More"
					});
				};
					QInfContCatMYes(){
						this.setState({
							QInfContCatM:false,
							A:true,
							hier:"Yes"
						}, function afterStateChange(){
							this.loadAnswer();
						});
					};
					QInfContCatMNo(){
						this.setState({
							QInfContCatM:false,
							A:true,
							hier:"No"
						}, function afterStateChange(){
							this.loadAnswer();
						});
					};
			QInfContCont(){
				this.setState({
					QInfCont:false,
					QInfContCont:true,
					DV:"Cont"
				});
			};
				QInfContContS(){
					this.setState({
						QInfContCont:false,
						QInfContContS:true,
						DV:"ContS"
					});
				};
					QInfContContSS(){
						this.setState({
							QInfContContS:false,
							A:true,
							IV:"ContS"
						}, function afterStateChange(){
							this.loadAnswer();
						});
					};	
					QInfContContSM(){
						this.setState({
							QInfContContS:false,
							QInfContContSM:true,
							IV:"ContM"
						});
					};
						QInfContContSMYes(){
							this.setState({
								QInfContContSM:false,
								QInfContContSMMod:true,
								hier:"Yes"
							});
						};
						QInfContContSMNo(){
							this.setState({
								QInfContContSM:false,
								QInfContContSMMod:true,
								hier:"No"
							});
						};
							QInfContContSMModYes(){
								this.setState({
									QInfContContSMMod:false,
									A:true,
									mod:"Yes"
								}, function afterStateChange(){
									this.loadAnswer();
								});
							};
							QInfContContSMModNo(){
								this.setState({
									QInfContContSMMod:false,
									A:true,
									mod:"No"
								}, function afterStateChange(){
									this.loadAnswer();
								});
							};
				QInfContContM(){
					this.setState({
						QInfContCont:false,
						A:true,
						DV:"ContM"
					}, function afterStateChange(){
						this.loadAnswer();
					});
				};



	QAss(){
		this.setState({
			Q:false,
			QAss:true,
			type:"Ass"
		});
	};
		QAssYes(){
			this.setState({
				QAss:false,
				QAssYes:true,
				scale:"Yes"
			});
		};
			QAssYesYes(){
				this.setState({
					QAssYes:false,
					A:true,
					scale:"Old"
				}, function afterStateChange(){
					this.loadAnswer();
				});
			};
			QAssYesNo(){
				this.setState({
					QAssYes:false,
					QAssYesNo:true,
					scale:"New"
				});
			};
				QAssYesNoYes(){
					this.setState({
						QAssYesNo:false,
						A:true,
						EFQ:"Yes"
					}, function afterStateChange(){
						this.loadAnswer();
					});
				};
				QAssYesNoNo(){
					this.setState({
						QAssYesNo:false,
						A:true,
						EFQ:"No"
					}, function afterStateChange(){
						this.loadAnswer();
					});
				};
		QAssNo(){
			this.setState({
				QAss:false,
				QAssNo:true,
				scale:"No"
			});
		};
			QAssNoYes(){
				this.setState({
					QAssNo:false,
					A:true,
					theory:"Yes"
				}, function afterStateChange(){
					this.loadAnswer();
				});
			};
			QAssNoNo(){
				this.setState({
					QAssNo:false,
					QAssNoNo:true,
					theory:"No"
				});
			};
				QAssNoNoS(){
					this.setState({
						QAssNoNo:false,
						QAssNoNoS:true,
						var:"Two"
					});
				};
					QAssNoNoSCat(){
						this.setState({
							QAssNoNoS:false,
							A:true,
							var:"CatS"
						}, function afterStateChange(){
							this.loadAnswer();
						});
					};
					QAssNoNoSCont(){
						this.setState({
							QAssNoNoS:false,
							A:true,
							var:"ContS"
						}, function afterStateChange(){
							this.loadAnswer();
						});
					};
				QAssNoNoM(){
					this.setState({
						QAssNoNo:false,
						QAssNoNoM:true,
						var:"More"
					});
				};
					QAssNoNoMYes(){
						this.setState({
							QAssNoNoM:false,
							A:true,
							DFA:"Yes"
						}, function afterStateChange(){
							this.loadAnswer();
						});
					};
					QAssNoNoMNo(){
						this.setState({
							QAssNoNoM:false,
							A:true,
							DFA:"No"
						}, function afterStateChange(){
							this.loadAnswer();
						});
					};




	render(){
		let ass=this.state.Answer.data.ass;
		ass = ass.map(function(item,index){
			return(
				<li>{item}</li>
			);	
		});
		return(
			<div>
				<Header />
				<ToggleDisplay show={this.state.title}>
					<div className="content">
						<h2>AnalysisPrep</h2>
						<h3>With modern technology, like SPSS, actually running an analysis only takes one click of a button.  The hard part is the prep work.</h3>
						<h3>What test should I run? Do I meet the conditions to be able to trust my results?  How many data points do I need?</h3>
						<h3>This is where AnalysisPrep comes in!  This application is designed to bring everything you need into one place, and streamline hours worth of prep work into minutes, so you can press your one button in SPSS that much sooner. </h3>
						<h3>With over 30 different analyses, AnalysisPrep is the most comprehensive guide to be found, and the only one to include assumptions and sample size calculators; everything you need to get started.</h3>
						<h4>Click below to get started</h4>
						<button className="AnswerButton" onClick={()=>this.handleClickStart()}>AnalysisFinder</button>
					</div>
				</ToggleDisplay>
				<ToggleDisplay show={this.state.Q}>
					<div className="AnalysisQuestion">
						<h2>What do you want to know about your data?</h2>
						<h3>(For ease of understanding, all examples will be written in terms of kittens)</h3>
						
						
						
						<button id="button1" className="AnswerButton b1" onClick={()=>this.QDes()}>Descriptions</button>
						<h3 id="example1" className="e1">EX: I just want to know basic information about how many and what kinds of kittens I have.</h3>
						<button className="AnswerButton b2" onClick={()=>this.QInf()}>Conclusions</button>
						<h3 className="e2">EX: I want to predict things, like how much I need to feed a kitten to make it REALLY fat.</h3>
						<button className="AnswerButton b3" onClick={()=>this.QAss()}>Associations</button>
						<h3 className="e3">EX: I want to know relationships, like is there a link between eye size and cuteness.</h3> 
					</div>
				</ToggleDisplay>
				
				<Question display={this.state.QDes} q="What kind of data are you describing?" 
					a1="Categorical" a2="Continuous" 
					e1="EX: Groups or kinds of kittens" e2="EX: Kitten weight, or length"
					f1={()=>this.QDesCat()} f2={()=>this.QDesCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QDesCont} q="What do you want to know?" 
					a1="Where the data falls" a2="How the data is spread" 
					e1="EX: Do I have more tabby kittens than anything else?" e2="EX: How big is my average kitten?"
					f1={()=>this.QDesContAvg()} f2={()=>this.QDesContSpread()} StartOver={()=>this.StartOver()}/>



				<Question display={this.state.QInf} q="What is your IV?" 
					a1="Categorical" a2="Continuous" 
					e1="EX: I want to change what I feed my kittens to see if they get chubby" e2="EX: I want to change how much I feed my kittens to see if they get chubby"
					f1={()=>this.QInfCat()} f2={()=>this.QInfCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCat} q="What is your DV?" 
					a1="Categorical" a2="Continuous" 
					e1="EX: I want to see if my changes impacted how many kittens are born in a litter" e2="EX: I want to see if my changes impacted how long my kittens are"
					f1={()=>this.QInfCatCat()} f2={()=>this.QInfCatCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatCat} q="Are you comparing your sample to your population?" 
					a1="Yes" a2="No" 
					e1="EX: I want to compare my kittens to all kittens in the world" e2="EX: I only care about my kittens"
					f1={()=>this.QInfCatCatYes()} f2={()=>this.QInfCatCatNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatCatNo} q="Are you looking at changes over time?" 
					a1="Yes" a2="No" 
					e1="EX: I want to track the growth of my kittens for a year" e2="EX: I only care about my kittens as they currently are"
					f1={()=>this.QInfCatCatNoYes()} f2={()=>this.QInfCatCatNoNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatCatNoYes} q="Do you have more than one level of DV?" 
					a1="Yes" a2="No" 
					e1="EX: For my outcome, I am looking at breeds, but I also want to know about boy kittens and girl kittens within each breed" e2="I only want to look at kitten breeds"
					f1={()=>this.QInfCatCatNoYesYes()} f2={()=>this.QInfCatCatNoYesNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatCont} q="How many DV do you have?" 
					a1="One" a2="More" 
					e1="EX: I think my changes will only impact the chubbiness of the kittens" e2="EX: I think my changes will impact the chubbiness and the cuteness of the kittens"
					f1={()=>this.QInfCatContS()} f2={()=>this.QInfCatContM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatContS} q="How many levels in your IV?" 
					a1="One" a2="More" 
					e1="EX: I only want to try different kinds of kitten food to see if it has an impact" e2="EX: I want to try different amounts of each kind of kitten food to see if it has an impact"
					f1={()=>this.QInfCatContSS()} f2={()=>this.QInfCatContSM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatContSS} q="Are you looking at change over time?" 
					a1="Yes" a2="No" 
					e1="EX: I want to track the growth of my kittens for a year" e2="EX: I only care about my kittens as they currently are"
					f1={()=>this.QInfCatContSSYes()} f2={()=>this.QInfCatContSSNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatContSM} q="Do you want to control other factors?" 
					a1="Yes" a2="No" 
					e1="EX: I want to control for whether my kitten likes to be held or not" e2="EX: I only have kittens that like to be held, so I don't need to control for that"
					f1={()=>this.QInfCatContSMYes()} f2={()=>this.QInfCatContSMNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatContM} q="Do you want to control for other factors?" 
					a1="Yes" a2="No" 
					e1="EX: I want to control for whether my kitten likes to be held or not" e2="EX: I only have kittens that like to be held, so I don't need to control for that"
					f1={()=>this.QInfCatContMYes()} f2={()=>this.QInfCatContMNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCont} q="What is your DV?" 
					a1="Categorical" a2="Continuous"
					e1="EX: I want to see if my changes impacted how many kittens are born in a litter" e2="EX: I want to see if my changes impacted how long my kittens are" 
					f1={()=>this.QInfContCat()} f2={()=>this.QInfContCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContCat} q="How many levels in your DV?" 
					a1="One" a2="More" 
					e1="EX: I think my changes will only impact the chubbiness of the kittens" e2="EX: I think my changes will impact the chubbiness and the cuteness of the kittens"
					f1={()=>this.QInfContCatS()} f2={()=>this.QInfContCatM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContCatS} q="Do you want to know how much influence each variable has?" 
					a1="Yes" a2="No" 
					e1="EX: I want to know if fluffiness has a greater influence than cuddliness on kitten cuteness" e2="EX: I only want to know if fluffiness and cuddliness do have an impact on kitten cuteness"
					f1={()=>this.QInfContCatSYes()} f2={()=>this.QInfContCatSNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContCatM} q="Do you want to know how much influence each variable has?" 
					a1="Yes" a2="No" 
					e1="EX: I want to know if fluffiness has a greater influence than cuddliness on kitten cuteness" e2="EX: I only want to know if fluffiness and cuddliness do have an impact on kitten cuteness"
					f1={()=>this.QInfContCatMYes()} f2={()=>this.QInfContCatMNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContCont} q="How many DV do you have?" 
					a1="One" a2="More" 
					e1="EX: I think my changes will only impact the chubbiness of the kittens" e2="EX: I think my changes will impact the chubbiness and the cuteness of the kittens"
					f1={()=>this.QInfContContS()} f2={()=>this.QInfContContM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContContS} q="How many IV do you have?" 
					a1="One" a2="More" 
					e1="EX: I wonder if whether I not I use a blowdrier impacts the fluffiness of my kitten" e2="EX: I want to change the shampoo AND whether or not I use a blowdrier to see if it impacts kitten fluffiness"
					f1={()=>this.QInfContContSS()} f2={()=>this.QInfContContSM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContContSM} q="Do you want to know how much influence each variable has?" 
					a1="Yes" a2="No" 
					e1="EX: I want to know if fluffiness has a greater influence than cuddliness on kitten cuteness" e2="EX: I only want to know if fluffiness and cuddliness do have an impact on kitten cuteness"
					f1={()=>this.QInfContContSMYes()} f2={()=>this.QInfContContSMNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContContSMMod} q="Do you think other variables can influence your DV?" 
					a1="Yes" a2="No"
					e1="EX: I think the breed of the kitten my change my results" e2="EX: I do not think kitten breed will change my results" 
					f1={()=>this.QInfContContSMModYes()} f2={()=>this.QInfContContSMModNo()} StartOver={()=>this.StartOver()}/>

				

				<Question display={this.state.QAss} q="Are you trying to validate a scale?" 
					a1="Yes" a2="No" 
					e1="I want to make a scale to accurately measure kitten cuteness" e2="I don't think you Can objectively measure kitten cuteness"
					f1={()=>this.QAssYes()} f2={()=>this.QAssNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssYes} q="Has the scale been validated before?" 
					a1="Yes" a2="No" 
					e1="EX: Someone else made a scale of kitten cuteness, and I want to make sure it works" e2="EX: This has never been done before! My cuteness scale is brand new!"
					f1={()=>this.QAssYesYes()} f2={()=>this.QAssYesNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssYesNo} q="Do you want the minimum number of factors?" 
					a1="Yes" a2="No" 
					e1="EX: I want to keep the kitten cuteness scale as simple as possible" e2="EX: I want the kitten cuteness scale to be as accurate as possible"
					f1={()=>this.QAssYesNoYes()} f2={()=>this.QAssYesNoNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssNo} q="Are you trying to create a theory?" 
					a1="Yes" a2="No" 
					e1="My kitten hypothesis must become a scientific theory!" e2="EX: I don't need to worry about kitten theories right now"
					f1={()=>this.QAssNoYes()} f2={()=>this.QAssNoNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssNoNo} q="How many variables do you have?" 
					a1="2" a2="More" 
					e1="EX: I am looking at kitten height and length" e2="EX: I am looking at kitten height, length, weight, fluffiness, and pouncing brutality"
					f1={()=>this.QAssNoNoS()} f2={()=>this.QAssNoNoM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssNoNoS} q="What kind of variables do you have?" 
					a1="Categorical" a2="Continuous" 
					e1="EX: I am looking at kitten breeds and sex"  e2="EX: I am looking at kitten weight and length"
					f1={()=>this.QAssNoNoSCat()} f2={()=>this.QAssNoNoSCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssNoNoM} q="Are you trying to predict group membership?" 
					a1="Yes" a2="No" 
					e1="EX: I think I can predict whether a kitten will be a boy or a girl, based on how much I pet the mother" e2="EX: I just want to see if there is a link between kitten sex and how much I pet the mother"
					f1={()=>this.QAssNoNoMYes()} f2={()=>this.QAssNoNoMNo()} StartOver={()=>this.StartOver()}/>
				


				<ToggleDisplay show={this.state.A}>
					<div className="AnalysisQuestion">
						<h3>You Should Run:</h3>
						<h2 className="AnalysisName">{this.state.Answer.data.name}</h2>
						<h3>Assumptions:</h3>
						<ul className="Assumptions">{ass}</ul>
						<p className="StartOver" onClick={()=>this.StartOver()}>Start Over?</p>
					</div>
				</ ToggleDisplay>
			</div>
		);			
	};
}