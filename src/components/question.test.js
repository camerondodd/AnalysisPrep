import React from 'react';
import {shallow} from 'enzyme';

import Question from './question';

describe('<Question />', ()=>{
	it('Exists', ()=>{
		shallow(<CalcOutput />);
	});
	// it('Renders Question',()=>{
	// 	let test_q = "Is this real?";
	// 	let test_a1 = "Yes";
	// 	let test_a2 = "No";
	// 	let test_display = "true";
	// 	let test_f1 = "function1";
	// 	let test_f2 = "function2";
	// 	let test_StartOver = "StartOverFunction";
	// 	let wrapper = shallow (<Question q={test_1} a1={test_a1} a2={test_a2} f1={test_f1} f2={test_f2} display={test_display} StartOver={test_StartOver} />);
	// 		expect(wrapper.contains(test_q)).toEqual(true);
	// });
});