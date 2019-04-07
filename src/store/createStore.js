import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './index'

export const middlewares = [thunk]
const createStoreWMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWMiddleware(rootReducer)