import {types} from '../../actions/types'

const initialState = {
    posts: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}

export default postsReducer