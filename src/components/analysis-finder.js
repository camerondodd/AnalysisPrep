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
			Answer:{},

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
		axios.get(`${API_BASE_URL}api/${search}.json`)
			.then(res => {
				let Answer = res;
				this.setState({Answer})
			});
	};
	handleClickStart(){
		this.setState({
			title:false,
			Q:true
		});
	};
	StartOver(){
		this.setState({
			Answer:{},

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
				});
			};
			QDesContSpread(){
				this.setState({
					QDesCont:false,
					A:true,
					purp:"Spread"
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
							});
						};
						QInfCatCatNoYesNo(){
						this.setState({
							QInfCatCatNoYes:false,
							A:true,
							DVL:"One"
							});
						};
					QInfCatCatNoNo(){
					this.setState({
						QInfCatCatNo:false,
						A:true,
						OT:"No"
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
							});
						};
						QInfCatContSSNo(){
						this.setState({
							QInfCatContSS:false,
							A:true,
							OT:"No"
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
							});
						};
						QInfCatContSMNo(){
						this.setState({
							QInfCatContSM:false,
							A:true,
							fact:"No"
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
						});
					};
					QInfCatContMNo(){
					this.setState({
						QInfCatContM:false,
						A:true,
						fact:"No"
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
						});
					};
					QInfContCatSNo(){
						this.setState({
							QInfContCatS:false,
							A:true,
							hier:"No"
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
						});
					};
					QInfContCatMNo(){
						this.setState({
							QInfContCatM:false,
							A:true,
							hier:"No"
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
								});
							};
							QInfContContSMModNo(){
								this.setState({
									QInfContContSMMod:false,
									A:true,
									mod:"No"
								});
							};
				QInfContContM(){
					this.setState({
						QInfContCont:false,
						A:true,
						DV:"ContM"
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
					});
				};
				QAssYesNoNo(){
					this.setState({
						QAssYesNo:false,
						A:true,
						EFQ:"No"
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
						});
					};
					QAssNoNoSCont(){
						this.setState({
							QAssNoNoS:false,
							A:true,
							var:"ContS"
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
						});
					};
					QAssNoNoMNo(){
						this.setState({
							QAssNoNoM:false,
							A:true,
							DFA:"No"
						});
					};




	render(){
		return(
			<div>
				<Header />
				<ToggleDisplay show={this.state.title}>
					<div className="content">
						<h2>AnalysisFinder</h2>
						<h3>AnalysisFinder will walk you through the process of selecting the appropriate analysis depending on your data and what you want to do with it</h3>
						<button onClick={()=>this.handleClickStart()}>Click Here to Begin!</button>
					</div>
				</ToggleDisplay>
				<ToggleDisplay show={this.state.Q}>
					<div className="AnalysisQuestion">
						<h2>What do you want to do with your data?</h2>
						<button onClick={()=>this.QDes()}>Describe it</button>
						<button onClick={()=>this.QInf()}>Infer Conclusions</button>
						<button onClick={()=>this.QAss()}>Learn Associations</button>
					</div>
				</ToggleDisplay>
				
				<Question display={this.state.QDes} q="What kind of data are you describing?" 
					a1="Categorical" a2="Continuous" 
					f1={()=>this.QDesCat()} f2={()=>this.QDesCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QDesCont} q="What do you want to know?" 
					a1="Where the data falls" a2="How the data is spread" 
					f1={()=>this.QDesContAvg()} f2={()=>this.QDesContSpread()} StartOver={()=>this.StartOver()}/>



				<Question display={this.state.QInf} q="What is your IV?" 
					a1="Categorical" a2="Continuous" 
					f1={()=>this.QInfCat()} f2={()=>this.QInfCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCat} q="What is your DV?" 
					a1="Categorical" a2="Continuous" 
					f1={()=>this.QInfCatCat()} f2={()=>this.QInfCatCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatCat} q="Are you comparing your sample to your population?" 
					a1="Yes" a2="No" 
					f1={()=>this.QInfCatCatYes()} f2={()=>this.QInfCatCatNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatCatNo} q="Are you looking at changes over time?" 
					a1="Yes" a2="No" 
					f1={()=>this.QInfCatCatNoYes()} f2={()=>this.QInfCatCatNoNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatCatNoYes} q="Do you have more than one level of DV?" 
					a1="Yes" a2="No" 
					f1={()=>this.QInfCatCatNoYesYes()} f2={()=>this.QInfCatCatNoYesNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatCont} q="How many DV do you have?" 
					a1="One" a2="More" 
					f1={()=>this.QInfCatContS()} f2={()=>this.QInfCatContM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatContS} q="How many levels in your IV?" 
					a1="One" a2="More" 
					f1={()=>this.QInfCatContSS()} f2={()=>this.QInfCatContSM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatContSS} q="Are you looking at change over time?" 
					a1="Yes" a2="No" 
					f1={()=>this.QInfCatContSSYes()} f2={()=>this.QInfCatContSSNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatContSM} q="Do you want to control other factors?" 
					a1="Yes" a2="No" 
					f1={()=>this.QInfCatContSMYes()} f2={()=>this.QInfCatContSMNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatContM} q="Do you want to control for other factors?" 
					a1="Yes" a2="No" 
					f1={()=>this.QInfCatContMYes()} f2={()=>this.QInfCatContMNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCont} q="What is your DV?" 
					a1="Categorical" a2="Continuous" 
					f1={()=>this.QInfContCat()} f2={()=>this.QInfContCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContCat} q="How many levels in your DV?" 
					a1="One" a2="More" 
					f1={()=>this.QInfContCatS()} f2={()=>this.QInfContCatM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContCatS} q="Do you want to know how much influence each variable has?" 
					a1="Yes" a2="No" 
					f1={()=>this.QInfContCatSYes()} f2={()=>this.QInfContCatSNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContCatM} q="Do you want to know how much influence each variable has?" 
					a1="Yes" a2="No" 
					f1={()=>this.QInfContCatMYes()} f2={()=>this.QInfContCattMNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContCont} q="How many DV do you have?" 
					a1="One" a2="More" 
					f1={()=>this.QInfContContS()} f2={()=>this.QInfContContM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContContS} q="How many IV do you have?" 
					a1="One" a2="More" 
					f1={()=>this.QInfContContSS()} f2={()=>this.QInfContContSM()} StartOver={()=>this.StartOver()}/>
				


				<Question display={this.state.QInfContContSM} q="Do you want to know how much influence each variable has?" 
					a1="Yes" a2="No" 
					f1={()=>this.QInfContContSMYes()} f2={()=>this.QInfContContSMNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContContSMMod} q="Do you think other variables can influence your DV?" 
					a1="Yes" a2="No" 
					f1={()=>this.QInfContContSMModYes()} f2={()=>this.QInfContContSMModNo()} StartOver={()=>this.StartOver()}/>

				

				<Question display={this.state.QAss} q="Are you trying to validate a scale?" 
					a1="Yes" a2="No" 
					f1={()=>this.QAssYes()} f2={()=>this.QAssNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssYes} q="Has the scale been validated before?" 
					a1="Yes" a2="No" 
					f1={()=>this.QAssYesYes()} f2={()=>this.QAssYesNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssYesNo} q="Do you want the minimum number of factors?" 
					a1="Yes" a2="No" 
					f1={()=>this.QAssYesNoYes()} f2={()=>this.QAssYesNoNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssNo} q="Are you trying to create a theory?" 
					a1="Yes" a2="No" 
					f1={()=>this.QAssNoYes()} f2={()=>this.QAssNoNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssNoNo} q="How many variables do you have?" 
					a1="2" a2="More" 
					f1={()=>this.QAssNoNoS()} f2={()=>this.QAssNoNoM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssNoNoS} q="What kind of variables do you have?" 
					a1="Categorical" a2="Continuous" 
					f1={()=>this.QAssNoNoSCat()} f2={()=>this.QAssNoNoSCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssNoNoM} q="Are you trying to predict group membership?" 
					a1="Yes" a2="No" 
					f1={()=>this.QAssNoNoMYes()} f2={()=>this.QAssNoNoMNo()} StartOver={()=>this.StartOver()}/>
				


				<ToggleDisplay show={this.state.A}>
					<div className="AnalysisQuestion">
						<h2>Answer Placeholder</h2>
						<h2>{this.state.Answer.name}</h2>
						<p className="StartOver" onClick={()=>this.StartOver()}>Start Over?</p>
					</div>
				</ToggleDisplay>
			</div>
		);			
	};
}