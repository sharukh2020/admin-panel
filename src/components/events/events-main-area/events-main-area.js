import React from 'react'
import FirstSection from '../first-section/first-section'
import SecondSection from '../second-section/second-section'
import ThirdSection from '../third-section/third-section'
import classes from './events-main-area.module.css'

class EventsMainArea extends React.Component{
    render(){
        return(
          <div className={classes['main-container']}>
              <FirstSection/>
              <SecondSection/>
              <ThirdSection/>
          </div>
        )
    }
}

export default EventsMainArea