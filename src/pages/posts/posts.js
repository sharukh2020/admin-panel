import React from 'react'
import PostsMainArea from '../../components/posts/posts-main-area/posts-main-area'
import Sidebar from '../../components/sidebar/sidebar'
import Topbar from '../../components/topbar/topbar'
import classes from './posts.module.css'

class Posts extends React.Component{
    render(){
        return(
            <div className={classes['main-container']}>
              <Topbar/>
              <Sidebar/>
              <PostsMainArea/>
            </div>
        )
    }
}

export default Posts