import React from 'react'
import Cards from '../../dashboard/cards/cards'
import FirstSection from '../first-section/first-section'
import FourthSection from '../fourth-section/fourth-section'
import ThirdSection from '../third-section/third-section'
import { cardsDataArr } from './cards-data-arr'
import classes from './loans-main-area.module.css'

class LoansMainArea extends React.Component{
    render(){
        return(
          <div className={classes['main-container']}>
               <FirstSection/>
               <Cards cardsDataArr={cardsDataArr}/>
               <ThirdSection/>
               <FourthSection/>
          </div>
        )
    }
}

export default LoansMainArea