import React from 'react';
import {shallow} from 'enzyme';

import Info from './info';

describe('<Info />', ()=>{
	it('Exists', ()=>{
		shallow(<Info />);
	});
});