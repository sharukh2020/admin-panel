import React from 'react'
import CreatePostMainArea from '../../components/create-post/create-post-main-area/create-post-main-area'
import Sidebar from '../../components/sidebar/sidebar'
import Topbar from '../../components/topbar/topbar'
import classes from './create-post.module.css'

class CreatePost extends React.Component{
    render(){
        return(
            <div className={classes['main-container']}>
              <Topbar/>
              <Sidebar/>
              <CreatePostMainArea/>
            </div>
        )
    }
}

export default CreatePost