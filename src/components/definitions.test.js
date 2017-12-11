import React from 'react';
import {shallow} from 'enzyme';

import Definitions from './definitions';

describe('<Definitions />', ()=>{
	it('Exists', ()=>{
		shallow(<Definitions />);
	});
});