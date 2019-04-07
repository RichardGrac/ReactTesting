import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAttr, checkProps} from '../Utils/index'
import Button from './index'

describe('Button Component Tests', function () {
    describe('Checking PropTypes', function () {
        it('should not throw a warning', function () {
            const expectedProps = {
                buttonText: 'Button text',
                emitEvent: () => {}
            }
            const propsError = checkProps(Button, expectedProps)
            expect(propsError).toBe(undefined)
        })
    })

    describe('Renders', () => {
        let component
        beforeEach(() => {
            const props = {
                buttonText: 'Button text',
                emitEvent: () => {}
            }
            component = shallow(<Button {...props} />)
        })

        it('should render a <Button>', () => {
            const wrapper = findByTestAttr(component, 'buttonComponent')
            // console.log(wrapper.debug())
            expect(wrapper.length).toBeGreaterThan(0)
        })
    })

})