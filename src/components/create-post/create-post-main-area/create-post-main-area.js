import React from 'react'
import LeftSection from '../left-section/left-section'
import RightSection from '../right-section/right-section'
import classes from './create-post-main-area.module.css'

class CreatePostMainArea extends React.Component{
    render(){
        return(
          <div className={classes['main-container']}>
              <LeftSection/>
              <RightSection/>
          </div>
        )
    }
}

export default CreatePostMainArea