import React from 'react'
import FirstSection from '../first-section/first-section'
import SecondSection from '../second-section/second-section'
import classes from './support-main-area.module.css'

class SupportMainArea extends React.Component{
    render(){
        return(
          <div className={classes['main-container']}>
               <FirstSection/>
               <SecondSection/>
          </div>
        )
    }
}

export default SupportMainArea