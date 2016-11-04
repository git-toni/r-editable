import React from 'react';
import {shallow} from 'enzyme';
import REditable from '../src'



describe('Input type', () => {
  const defVal = 'Hello'
  const wrapper = shallow(<REditable value={defVal}/>)
  it('renders a span with default value',()=>{
    expect(wrapper.find('span').length).toEqual(1)
    expect(wrapper.find('span').text()).toEqual(defVal)
  })
  describe('when clicked',()=>{
    //wrapper.simulate('click')
    it('renders an input with default value',()=>{
      wrapper.simulate('click')
      expect(wrapper.find('span').length).toEqual(0)
      expect(wrapper.find('input').length).toEqual(1)
      expect(wrapper.find('input').props().value).toEqual(defVal)
    })
  })
  describe('when clicked and edited',()=>{
    const newVal = 'Hola'
    it('renders an input with newvalue value',()=>{
      //wrapper.find('span').simulate('click')
      wrapper.find('input').simulate('change',{target:{value:newVal}})
      console.log(wrapper.html())
      //expect(wrapper.find('input').props().value).toEqual(newVal)
      expect(true).toEqual(newVal)
    })
  })
});
