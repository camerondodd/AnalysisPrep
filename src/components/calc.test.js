import React from 'react';
import {shallow} from 'enzyme';

import Calc from './calc';

describe('<Calc />', ()=>{
	it('Exists', ()=>{
		shallow(<Calc />);
	});
});