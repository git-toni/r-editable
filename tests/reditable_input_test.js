import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import REditable from '../src'


const defVal = 'Hello'
const myId = 'myId'
const wrapper = shallow(<REditable id={myId} value={defVal}/>);

test('default renders a span', t => {
  t.is(wrapper.find('span').length, 1)
  t.is(wrapper.find('span').text(), defVal)
});
test('when clicked turns into input with passed id', t => {
  wrapper.simulate('click')
  t.is(wrapper.find('span').length, 0)
  t.is(wrapper.find('input').length, 1)
  t.is(wrapper.find('input').props().id, myId)
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

test('when clicked, edited, then press "Enter" renders back span', t => {
  const newVal = 'Hola'
  wrapper.simulate('click')
  wrapper.simulate('change',{target:{value:newVal}})
  wrapper.simulate('keypress',{key:'Enter'})
  t.is(wrapper.find('span').length, 1)
  t.is(wrapper.find('input').length, 0)
  t.is(wrapper.find('span').text(), newVal)
});

test('calls passed onChange prop function"', t => {
  const newVal = 'Hola'
  let setMeValue=0
  let myOnChange=(function(obj){
    setMeValue=obj.value
  }).bind(setMeValue)

  const wrOnChange = shallow(<REditable onChange={myOnChange} />);
  wrOnChange.simulate('click')
  const input = wrOnChange.find('input')
  input.simulate('change',{target:{value:newVal}})

  t.is(setMeValue,newVal,'Parent onChange function was not called')
});
