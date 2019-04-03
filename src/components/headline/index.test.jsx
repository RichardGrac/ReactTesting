import React from 'react'
import {shallow} from 'enzyme'
import Headline from './index'
import {checkProps, findByTestAttr} from '../Utils'

const setUp = (props = {}) => {
    return shallow(<Headline {...props} />)
}

describe('Headline tests', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test header',
                desc: 'Test desc',
                tempArr: [{
                    fName: 'Rich',
                    age: 23,
                    onlineStatus: false
                }]
            }

            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined();
        })

        it('Should throw a warning', () => {
            const expectedProps = {
                header: 'Test header',
                desc: 'Test desc',
                tempArr: [{
                    fName: 1,
                    age: '23',
                    onlineStatus: 'false'
                }]
            }

            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeTruthy();
        })
    })

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
            expect(wrapper.length).toBeGreaterThan(0)
        })

        test('Should render a <p>', () => {
            const wrapper = findByTestAttr(component, 'Desc')
            expect(wrapper.length).toBeTruthy()
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