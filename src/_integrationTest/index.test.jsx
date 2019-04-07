import moxios from 'moxios'
import {testStore} from '../components/Utils/index'
import {fetchPosts} from '../store/actions'

describe('FetchPosts action', () => {

    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    it('should update store correctly', () => {
        const expectedState = [
            {
                title: 'Example test',
                body: 'Text test'
            },
            {
                title: 'Example test',
                body: 'Text test'
            },
            {
                title: 'Example test',
                body: 'Text test'
            }
        ]
        const store = testStore()

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: []
            })
        })

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState()
                expect(newState.postsReducer.posts).toBe(expectedState)
            })
    })
})