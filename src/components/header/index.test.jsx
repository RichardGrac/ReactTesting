import React from 'react'
import {shallow} from 'enzyme'
import Header from './index'
import {findByTestAttr} from '../Utils'


const setUp = (props = {}) => {
    return shallow(<Header {...props} />)
}

describe('Header tests', () => {

    let component;
    beforeEach(() => {
        component = setUp()
    })

    test('It should render a Header', () => {
        console.log('component: ', component.debug())
        const wrapper = findByTestAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    })

    it('It should render a logo', () => {
        const logo = component.find('#logoImg')
        expect(logo.length).toBe(1)
    })
})