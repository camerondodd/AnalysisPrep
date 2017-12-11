import React from 'react';
import {shallow} from 'enzyme';

import Term from './term';

describe('<Term />', ()=>{
	it('Exists', ()=>{
		shallow(<Term />);
	});
	it('Renders output',()=>{
		let test_term = "web dev";
		let test_def= "best job ever";
		let wrapper = shallow (<Term term={test_term} def={test_def} />);
			expect(wrapper.contains(test_term)).toEqual(true);
	});
});