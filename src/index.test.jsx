import {findByTestAttr, testStore} from './components/Utils'
import {shallow} from 'enzyme'
import App from './App'
import React from 'react'

const setUp = (initialState = {}) => {
    const store = testStore(initialState)
    const wrapper = shallow(<App store={store} />).childAt(0).dive()
    return wrapper
}

describe('<App /> tests', () => {
    let wrapper
    beforeEach(() => {
        const initialState = {
            postsReducer: {
                posts: [
                    {
                    title: 'Title test 1',
                    body: 'Body test 1'
                    },
                    {
                        title: 'Title test 2',
                        body: 'Body test 2'
                    },
                    {
                        title: 'Title test 3',
                        body: 'Body test 3'
                    }
                ]
            }
        }
        wrapper = setUp(initialState)
    })

    it('should render without errors', () => {
        const component = findByTestAttr(wrapper, 'AppComponent')
        expect(component.length).toBe(1)
    })

    it('should render 3 <ListItems />', () => {
        const component = findByTestAttr(wrapper, 'ListItemComponent')
        expect(component.length).toBe(3)
    })
})