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
			example:false,
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

			ex1:false,
			ex2:false,
			ex3:false,
			ex4:false,
			ex5:false,
			ex6:false,
			ex7:false,
			ex8:false,
			ex9:false,
			ex10:false,
			ex11:false,
			ex12:false,
			ex13:false,
			ex14:false,
			ex15:false,
			ex16:false,
			ex17:false,
			ex18:false,
			ex19:false,
			ex20:false,
			ex21:false,
			ex22:false,
			ex23:false,
			ex24:false,
			ex25:false,
			ex26:false,
			ex27:false,
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
	handleExample(){
		this.setState({
			example:!this.state.example
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
			example:false,
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
			
			ex1:false,
			ex2:false,
			ex3:false,
			ex4:false,
			ex5:false,
			ex6:false,
			ex7:false,
			ex8:false,
			ex9:false,
			ex10:false,
			ex11:false,
			ex12:false,
			ex13:false,
			ex14:false,
			ex15:false,
			ex16:false,
			ex17:false,
			ex18:false,
			ex19:false,
			ex20:false,
			ex21:false,
			ex22:false,
			ex23:false,
			ex24:false,
			ex25:false,
			ex26:false,
			ex27:false,
		});
	};
	ex1(){
		this.setState({
			ex1:!this.state.ex1
		})
	}
	ex2(){
		this.setState({
			ex2:!this.state.ex2
		})
	}
	ex3(){
		this.setState({
			ex3:!this.state.ex3
		})
	}
	ex4(){
		this.setState({
			ex4:!this.state.ex4
		})
	}
	ex5(){
		this.setState({
			ex5:!this.state.ex5
		})
	}
	ex6(){
		this.setState({
			ex6:!this.state.ex6
		})
	}
	ex7(){
		this.setState({
			ex7:!this.state.ex7
		})
	}
	ex8(){
		this.setState({
			ex8:!this.state.ex8
		})
	}
	ex9(){
		this.setState({
			ex9:!this.state.ex9
		})
	}
	ex10(){
		this.setState({
			ex10:!this.state.ex10
		})
	}
	ex11(){
		this.setState({
			ex11:!this.state.ex11
		})
	}
	ex12(){
		this.setState({
			ex12:!this.state.ex12
		})
	}
	ex13(){
		this.setState({
			ex13:!this.state.ex13
		})
	}
	ex14(){
		this.setState({
			ex14:!this.state.ex14
		})
	}
	ex15(){
		this.setState({
			ex15:!this.state.ex15
		})
	}
	ex16(){
		this.setState({
			ex16:!this.state.ex16
		})
	}
	ex17(){
		this.setState({
			ex17:!this.state.ex17
		})
	}
	ex18(){
		this.setState({
			ex18:!this.state.ex18
		})
	}
	ex19(){
		this.setState({
			ex19:!this.state.ex19
		})
	}
	ex20(){
		this.setState({
			ex20:!this.state.ex20
		})
	}
	ex21(){
		this.setState({
			ex21:!this.state.ex21
		})
	}
	ex22(){
		this.setState({
			ex22:!this.state.ex22
		})
	}
	ex23(){
		this.setState({
			ex23:!this.state.ex23
		})
	}
	ex24(){
		this.setState({
			ex24:!this.state.ex24
		})
	}
	ex25(){
		this.setState({
			ex25:!this.state.ex25
		})
	}
	ex26(){
		this.setState({
			ex26:!this.state.ex26
		})
	}
	ex27(){
		this.setState({
			ex27:!this.state.ex27
		})
	}
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
						<h3>Statistics is a growing field, and can be found everywhere from private research and academics to public health and sports.  Analyses are the key to this field, and work with everything from a couple entries to databases with millions of entries and hundreds of variables, crunching the numbers into a useful result.</h3>
						<h3>With modern technology, like SPSS, actually running an analysis only takes one click of a button.  The hard part is the prep work. What test should I run? Do I meet the conditions to be able to trust my results?  How many data points do I need?</h3>
						<h2 className="ExampleHeader" onClick={()=>this.handleExample()}>Example</h2>
						<ToggleDisplay show={this.state.example}>
							<h4>John, a web developer, has several websites of different layouts and he wants to see which layouts are more popular, so he tracks things like number of visits and how long someone stays on a page.  After collecting all of this data he has two options:</h4>
							<h4>Option 1. John can spend up to a day looking up different guides, different sample calculators, term defitions, and assumptions trying to get the appropriate set of conditions for his data, so he can start his analysis.</h4>
							<h4>Option 2. John can spend minutes with AnalysisPrep. </h4> 
						</ToggleDisplay>
						<h2>This is where AnalysisPrep comes in!</h2>
						<h3>This application is designed to bring everything you need into one place, and streamline hours worth of prep work into minutes, so you can press your one button in SPSS that much sooner. With over 30 different analyses, AnalysisPrep is the most comprehensive guide to be found, and the only one to include assumptions and sample size calculators; everything you need to get started.</h3>
						<h4>Click below to begin</h4>
						<button className="AnswerButton" onClick={()=>this.handleClickStart()}>AnalysisFinder</button>
					</div>
				</ToggleDisplay>
				<ToggleDisplay show={this.state.Q}>
					<div className="AnalysisQuestion">
						<h2>What do you want to know about your data?</h2>
						<h3 onClick={()=>this.ex1()} className="clar">Clarification</h3>
						<ToggleDisplay show={this.state.ex1}>
							<h4>Descriptive statistics looks at the current state of your data.  Conclusions look at the effect one variable has on another.  Associations looks at the relationships between variables.</h4>
						</ToggleDisplay>
						<button id="button1" className="AnswerButton" onClick={()=>this.QDes()}>Descriptions</button>
						<button className="AnswerButton" onClick={()=>this.QInf()}>Conclusions</button>
						<button className="AnswerButton" onClick={()=>this.QAss()}>Associations</button> 
					</div>
				</ToggleDisplay>
				
				<Question display={this.state.QDes} q="What kind of data are you describing?" 
					a1="Categorical" a2="Continuous" 
					ex={()=>this.ex1()} exDis={this.state.ex1}
					e1="Categorical data is data that has a few set values from which to choose.  Continuous data can land anywhere between a minimum and maximum."
					f1={()=>this.QDesCat()} f2={()=>this.QDesCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QDesCont} q="What do you want to know?" 
					a1="Where the data falls" a2="How the data is spread" 
					ex={()=>this.ex2()} exDis={this.state.ex2}
					e1="Where the data falls looks at what is normal in your data.  How the data is spread looks at variance in your data."
					f1={()=>this.QDesContAvg()} f2={()=>this.QDesContSpread()} StartOver={()=>this.StartOver()}/>



				<Question display={this.state.QInf} q="What is your IV?" 
					a1="Categorical" a2="Continuous" 
					ex={()=>this.ex3()} exDis={this.state.ex3}
					e1="Categorical IV is when the variable you are changing in your study is chosen from a few set values.  Continuous IV is when the variable you are changing in your study can fall anywhere within a range."
					f1={()=>this.QInfCat()} f2={()=>this.QInfCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCat} q="What is your DV?" 
					a1="Categorical" a2="Continuous" 
					ex={()=>this.ex4()} exDis={this.state.ex4}
					e1="Categorical DV is when your result variable is comprised of a few set values.  Continuous DV is when your result variable can fall anywhere within a range."
					f1={()=>this.QInfCatCat()} f2={()=>this.QInfCatCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatCat} q="Are you comparing your sample to your population?" 
					a1="Yes" a2="No" 
					ex={()=>this.ex5()} exDis={this.state.ex5}
					e1="Comparing your sample to the population is when you are trying to find out if your little part of the population is representative of the whole."
					f1={()=>this.QInfCatCatYes()} f2={()=>this.QInfCatCatNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatCatNo} q="Are you looking at changes over time?" 
					a1="Yes" a2="No" 
					ex={()=>this.ex6()} exDis={this.state.ex6}
					e1="This is for if you expect your variable to change from one time point to another."
					f1={()=>this.QInfCatCatNoYes()} f2={()=>this.QInfCatCatNoNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatCatNoYes} q="Do you have more than one level of DV?" 
					a1="Yes" a2="No" 
					ex={()=>this.ex7()} exDis={this.state.ex7}
					e1="Is your outcome variable broken into extra layers of complexity?"
					f1={()=>this.QInfCatCatNoYesYes()} f2={()=>this.QInfCatCatNoYesNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatCont} q="How many DV do you have?" 
					a1="One" a2="More" 
					ex={()=>this.ex8()} exDis={this.state.ex8}
					e1="Are you looking at one outcome or more?"
					f1={()=>this.QInfCatContS()} f2={()=>this.QInfCatContM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatContS} q="How many levels in your IV?" 
					a1="One" a2="More" 
					ex={()=>this.ex9()} exDis={this.state.ex9}
					e1="Is the variable that you are changing broken into extra layers of complexity?"
					f1={()=>this.QInfCatContSS()} f2={()=>this.QInfCatContSM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatContSS} q="Are you looking at change over time?" 
					a1="Yes" a2="No" 
					ex={()=>this.ex10()} exDis={this.state.ex10}
					e1="This is for if you expect your variable to change from one time point to another."
					f1={()=>this.QInfCatContSSYes()} f2={()=>this.QInfCatContSSNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatContSM} q="Do you want to control other factors?" 
					a1="Yes" a2="No" 
					ex={()=>this.ex11()} exDis={this.state.ex11}
					e1="Do you need to adjust for things you could not control experimentally that you think will influence your findings?"
					f1={()=>this.QInfCatContSMYes()} f2={()=>this.QInfCatContSMNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCatContM} q="Do you want to control for other factors?" 
					a1="Yes" a2="No"
					 ex={()=>this.ex12()} exDis={this.state.ex12}
					e1="Do you need to adjust for things you could not control experimentally that you think will influence your findings?"
					f1={()=>this.QInfCatContMYes()} f2={()=>this.QInfCatContMNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfCont} q="What is your DV?" 
					a1="Categorical" a2="Continuous"
					ex={()=>this.ex13()} exDis={this.state.ex13}
					e1="Categorical DV is when your result variable is comprised of a few set values.  Continuous DV is when your result variable can fall anywhere within a range." 
					f1={()=>this.QInfContCat()} f2={()=>this.QInfContCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContCat} q="How many levels in your DV?" 
					a1="One" a2="More" 
					ex={()=>this.ex14()} exDis={this.state.ex14}
					e1="Is your outcome variable broken into extra layers of complexity?"
					f1={()=>this.QInfContCatS()} f2={()=>this.QInfContCatM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContCatS} q="Do you want to know how much influence each variable has?" 
					a1="Yes" a2="No" 
					ex={()=>this.ex15()} exDis={this.state.ex15}
					e1="This looks at more than pass/fail, but how much each variable changes your outcome."
					f1={()=>this.QInfContCatSYes()} f2={()=>this.QInfContCatSNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContCatM} q="Do you want to know how much influence each variable has?" 
					a1="Yes" a2="No" 
					ex={()=>this.ex16()} exDis={this.state.ex16}
					e1="This looks at more than pass/fail, but how much each variable changes your outcome."
					f1={()=>this.QInfContCatMYes()} f2={()=>this.QInfContCatMNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContCont} q="How many DV do you have?" 
					a1="One" a2="More" 
					ex={()=>this.ex17()} exDis={this.state.ex17}
					e1="Are you looking at one outcome or more?"
					f1={()=>this.QInfContContS()} f2={()=>this.QInfContContM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContContS} q="How many IV do you have?" 
					a1="One" a2="More" 
					ex={()=>this.ex18()} exDis={this.state.ex18}
					e1="How many variables are you changing to see if they impact the outcome?"
					f1={()=>this.QInfContContSS()} f2={()=>this.QInfContContSM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContContSM} q="Do you want to know how much influence each variable has?" 
					a1="Yes" a2="No" 
					ex={()=>this.ex19()} exDis={this.state.ex19}
					e1="This looks at more than pass/fail, but how much each variable changes your outcome."
					f1={()=>this.QInfContContSMYes()} f2={()=>this.QInfContContSMNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QInfContContSMMod} q="Do you think other variables can influence your DV?" 
					a1="Yes" a2="No"
					ex={()=>this.ex20()} exDis={this.state.ex20}
					e1="This looks at more than pass/fail, but how much each variable changes your outcome."
					f1={()=>this.QInfContContSMModYes()} f2={()=>this.QInfContContSMModNo()} StartOver={()=>this.StartOver()}/>

				

				<Question display={this.state.QAss} q="Are you trying to validate a scale?" 
					a1="Yes" a2="No" 
					ex={()=>this.ex21()} exDis={this.state.ex21}
					e1="Scales are used for translating a concept into a measurable number."
					f1={()=>this.QAssYes()} f2={()=>this.QAssNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssYes} q="Has the scale been validated before?" 
					a1="Yes" a2="No" 
					ex={()=>this.ex22()} exDis={this.state.ex22}
					e1="Are you confirming a scale works, or making a new one?"
					f1={()=>this.QAssYesYes()} f2={()=>this.QAssYesNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssYesNo} q="Do you want the minimum number of factors?" 
					a1="Yes" a2="No" 
					ex={()=>this.ex23()} exDis={this.state.ex23}
					e1="Using the minimum number of factors will simplify your scale, but may not be as accurate."
					f1={()=>this.QAssYesNoYes()} f2={()=>this.QAssYesNoNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssNo} q="Are you trying to create a theory?" 
					a1="Yes" a2="No" 
					ex={()=>this.ex24()} exDis={this.state.ex24}
					e1="Creating a scientific theory from a hypothesis is a rigorous process."
					f1={()=>this.QAssNoYes()} f2={()=>this.QAssNoNo()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssNoNo} q="How many variables do you have?" 
					a1="2" a2="More" 
					ex={()=>this.ex25()} exDis={this.state.ex25}
					e1="Independent and dependent aside, are you comparing two groups or many?"
					f1={()=>this.QAssNoNoS()} f2={()=>this.QAssNoNoM()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssNoNoS} q="What kind of variables do you have?" 
					a1="Categorical" a2="Continuous" 
					ex={()=>this.ex26()} exDis={this.state.ex26}
					e1="Categorical variables is data that has a few set values from which to choose.  Continuous variables can land anywhere between a minimum and maximum."
					f1={()=>this.QAssNoNoSCat()} f2={()=>this.QAssNoNoSCont()} StartOver={()=>this.StartOver()}/>
				<Question display={this.state.QAssNoNoM} q="Are you trying to predict group membership?" 
					a1="Yes" a2="No" 
					ex={()=>this.ex27()} exDis={this.state.ex27}
					e1="Predicting group membership is estimating where a point will fall, based on some set of conditions"
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