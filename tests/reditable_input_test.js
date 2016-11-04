import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import REditable from '../src'


const defVal = 'Hello'
const wrapper = shallow(<REditable value={defVal}/>);

test('default renders a span', t => {
  t.is(wrapper.find('span').length, 1)
  t.is(wrapper.find('span').text(), defVal)
});
test('when clicked turns into input', t => {
  wrapper.simulate('click')
  t.is(wrapper.find('span').length, 0)
  t.is(wrapper.find('input').length, 1)
  t.is(wrapper.find('input').props().value, defVal)
});
test('when clicked we can edit input', t => {
  const newVal = 'Hola'
  wrapper.simulate('click')
  wrapper.simulate('change',{target:{value:newVal}})
  t.is(wrapper.find('span').length, 0)
  t.is(wrapper.find('input').length, 1)
  t.is(wrapper.find('input').props().value, newVal)
});
test('when clicked, edited, then Blur renders back span', t => {
  const newVal = 'Hola'
  wrapper.simulate('click')
  wrapper.simulate('change',{target:{value:newVal}})
  wrapper.simulate('blur')
  t.is(wrapper.find('span').length, 1)
  t.is(wrapper.find('input').length, 0)
  t.is(wrapper.find('span').text(), newVal)
});
