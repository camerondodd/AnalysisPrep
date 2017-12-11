import React from 'react';
import {shallow} from 'enzyme';

import CalcInput from './calc-input';

describe('<CalcInput />', ()=>{
	it('Exists', ()=>{
		shallow(<CalcInput />);
	});
});