import React from 'react'
import {shallow} from 'enzyme'
import {checkProps, findByTestAttr} from '../Utils/index'
import ListItem from './index'

describe('ListItem Tests', () => {

    describe('Checking PropTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                title: 'Title test',
                desc: 'Description test'
            }

            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBe(undefined)
        })
    })

    describe('Component renders', () => {
        let wrapper
        beforeEach(() => {
            const props = {
                title: 'Title test',
                desc: 'Description test'
            }
            wrapper = shallow(<ListItem {...props} />)
        })

        it('should renders a button', () => {
            const component = findByTestAttr(wrapper, 'ListItem')
            expect(component.length).toBe(1)
        })

        it('should render a title', () => {
            const component = findByTestAttr(wrapper, 'ListItem-title')
            expect(component.length).toBeTruthy()
        })

        it('should render a description', () => {
            const component = findByTestAttr(wrapper, 'ListItem-desc')
            expect(component.length).toBe(1)
        })
    })


})