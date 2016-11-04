import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import REditable from '../src'

const myOpt = [
  {name:'Apple',value:'apple'},
  {name:'Pear',value:'pear'},
  {name:'Grape',value:'grape'},
  {name:'Banana',value:'banana'},
  {name:'Orange',value:'orange'}
]
const defVal = {name:'Grape',value:'grape'}

const wrapper = shallow(<REditable type='dropdown' options={myOpt} value={defVal.value}/>);

test('default renders a span', t => {
  t.is(wrapper.find('span').length, 1)
  t.is(wrapper.find('span').text(), defVal.name)
});
test('when clicked turns into select with passed options', t => {
  wrapper.simulate('click')
  t.is(wrapper.find('span').length, 0)
  t.is(wrapper.find('select').length, 1)
  t.is(wrapper.find('option').length, myOpt.length)
  t.is(wrapper.find('select').props().value, defVal.value)
});
/*
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
*/
