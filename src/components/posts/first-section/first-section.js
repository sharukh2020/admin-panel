import React from 'react'
import classes from './first-section.module.css'

class FirstSection extends React.Component{
    render(){
        return(
          <div className={classes['main-container']}>
               Posts
          </div>
        )
    }
}

export default FirstSection