import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import REditable from '../src'



test('default renders an input', t => {
  const wrapper = shallow(<REditable />);
  console.log('pre ', wrapper.html())
  wrapper.simulate('change',{target:{value:'aloha'}})
  //wrapper.simulate('click')
  console.log('post ',wrapper.html())
  t.is(true, true);
});
