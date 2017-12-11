import React from 'react';
import {shallow} from 'enzyme';

import AnalysisFinder from './analysis-finder';

describe('<AnalysisFinder />', ()=>{
	it('Exists', ()=>{
		shallow(<AnalysisFinder />);
	});
});