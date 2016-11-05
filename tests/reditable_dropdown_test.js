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
test('when clicked, edited, then Blur renders back span', t => {
  const newVal = {name:'Orange',value:'orange'}
  wrapper.simulate('click')
  wrapper.simulate('change',{target:{value:newVal.value}})
  wrapper.simulate('blur')
  t.is(wrapper.find('span').length, 1)
  t.is(wrapper.find('select').length, 0)
  t.is(wrapper.find('option').length, 0)
  t.is(wrapper.find('span').text(), newVal.name)
});
test('no params renders empty select', t => {
  const emptyWrapper = shallow(<REditable type='dropdown' options={myOpt} />);
  t.is(emptyWrapper.find('span').length, 2)
  t.is(emptyWrapper.text(), 'Empty')
});

test('calls passed onChange prop function"', t => {
  const newVal = 'Hola'
  let setMeValue=0
  let myOnChange=(function(obj){
    setMeValue=obj.value
  }).bind(setMeValue)

  const wrOnChange = shallow(<REditable type='dropdown' onChange={myOnChange} options={myOpt} />);
  wrOnChange.simulate('click')
  const sel = wrOnChange.find('select')
  sel.simulate('change',{target:{value:newVal}})

  t.is(setMeValue,newVal,'Parent onChange function was not called')
});

