import React from "react";
import {connect} from 'react-redux'
import Header from './components/header'
import './App.scss'
import Headline from './components/headline'
import Button from './components/button'
import ListItem from './components/listItem'
import {fetchPosts} from './store/actions'
import {bindActionCreators} from 'redux'

const tempArr = [{
    name: 'Richard',
    age: 23,
    onlineStatus: true
}]

export const App = props => {
    const {posts} = props
    return (
      <div className='App'>
        <Header />
        <section className='main'>
          <Headline header={"Posts"} desc={"Click the button to render posts!"} tempArr={tempArr} />
          <Button buttonText={'GET POSTS'} emitEvent={(e) => props.fetchPosts()} />
            {posts.length > 0 && posts.map((post, i) => <ListItem key={i} title={post.title} desc={post.body} />)}
        </section>
      </div>
    )
}

const actionCreators = {
    fetchPosts
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch)
}

const mapStateToProps = state => {
    return {
        posts: state.postsReducer.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
