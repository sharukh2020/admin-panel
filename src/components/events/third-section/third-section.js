import React from 'react'
import classes from './third-section.module.css'
import LeftThirdSection from '../left-third-section/left-third-section'
import RightThirdSection from '../right-third-section/right-third-section'
import { cardsDataArr, cardsDataArr2 } from './cardsDataArr'

class ThirdSection extends React.Component{
    render(){
        return(
            <div className={classes['main-container']}>
                <div className={classes['left-part']}>
                    <LeftThirdSection 
                    cardsDataArr={cardsDataArr2} 
                    event={'Ongoing events'}
                    dropdown={'none'}
                    cellRightIcon={'none'}
                    eventTime={'red'}
                   />
                    <LeftThirdSection 
                        cardsDataArr={cardsDataArr}
                        event={'Upcoming events'}
                    />
                </div>
              <RightThirdSection/>
            </div>
        )
    }
}

export default ThirdSection