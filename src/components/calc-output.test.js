import React from 'react';
import {shallow} from 'enzyme';

import CalcOutput from './calc-output';

describe('<CalcOutput />', ()=>{
	it('Exists', ()=>{
		shallow(<CalcOutput />);
	});
	it('Renders output',()=>{
		let test_value = "1337";
		let wrapper = shallow (<CalcOutput value={test_value} />);
			expect(wrapper.contains(test_value)).toEqual(true);
	})
});