import React from 'react';
import {shallow} from 'enzyme';

import Question from './question';

describe('<Question />', ()=>{
	it('Exists', ()=>{
		shallow(<Question />);
	});
});