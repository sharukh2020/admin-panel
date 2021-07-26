import React from 'react'
import classes from './third-section.module.css'
import LeftThirdSection from '../left-third-section/left-third-section'
import RightThirdSection from '../right-third-section/right-third-section'

class ThirdSection extends React.Component{
    render(){
        return(
            <div className={classes['main-container']}>
              <LeftThirdSection/>
              <RightThirdSection/>
            </div>
        )
    }
}

export default ThirdSection