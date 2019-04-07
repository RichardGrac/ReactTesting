import checkPropTypes from 'check-prop-types'
import {applyMiddleware, createStore} from 'redux'
import {middlewares} from '../../store/createStore'
import rootReducer from '../../store/index'

export const findByTestAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`)
}

export const checkProps = (component, expectedProps) => {
    return checkPropTypes(
        component.propTypes,
        expectedProps,
        'props',
        component.name
    )
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState)
}