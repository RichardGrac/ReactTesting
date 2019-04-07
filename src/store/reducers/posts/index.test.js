import {types} from '../../actions/types'
import postReducer from './index'

describe('Posts Reducer', () => {
    it('should return default state', () => {
        const reducer = postReducer(undefined, {})
        expect(reducer).toEqual({posts: []})
    });

    it('should return new state', () => {
        const posts = [{id: 0, title: 'Test 1'}, {id: 1, title: 'Test 2'}, {id: 2, title: 'Test 3'}]
        const newState = postReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        })
        expect(newState.posts).toEqual(posts)
    });
});