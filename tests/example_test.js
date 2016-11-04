import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';



test('renders a select tag with no options', t => {
  const wrapper = shallow(<div />);
  t.is(wrapper.find('div').length, 1);
});
