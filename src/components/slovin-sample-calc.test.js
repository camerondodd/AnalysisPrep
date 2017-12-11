import React from 'react';
import {shallow} from 'enzyme';

import SlovinSampleCalc from './slovin-sample-calc';

describe('<SlovinSampleCalc />', ()=>{
	it('Exists', ()=>{
		shallow(<SlovinSampleCalc />);
	});
});