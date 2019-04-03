import React from 'react'
import {shallow} from 'enzyme'
import Headline from './index'
import {findByTestAttr} from '../Utils'

const setUp = (props = {}) => {
    return shallow(<Headline {...props} />)
}

describe('Headline tests', () => {

    describe('If props', () => {

        let component
        beforeEach(() => {
            component = setUp({
                header: 'Test Header',
                desc: 'Test Desc'
            })
        })

        test('Should render a headline', () => {
            const wrapper = findByTestAttr(component, 'HeadlineComponent')
            expect(wrapper.length).toBe(1)
        })

        test('Should render a <h1>', () => {
            const wrapper = findByTestAttr(component, 'Header')
            expect(wrapper.length).toBe(1)
        })

        test('Should render a <p>', () => {
            const wrapper = findByTestAttr(component, 'Desc')
            expect(wrapper.length).toBe(1)
        })

    })

    describe('If no props', () => {

        let component
        beforeEach(() => {
            component = setUp()
        })

        test('Should not render a headline', () => {
            const wrapper = findByTestAttr(component, 'HeadlineComponent')
            expect(wrapper.length).toBe(0)
        })
    })
})