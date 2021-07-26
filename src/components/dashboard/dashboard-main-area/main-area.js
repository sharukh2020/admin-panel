import React from 'react'
import Cards from '../cards/cards'
import Header from '../header/header'
import { cardsDataArr } from './cards-data-arr'
import classes from './main-area.module.css'
import ThirdSection from '../third-section/third-section'

class MainArea extends React.Component{
    render(){
        return(
           <div className={classes.MainArea}>
                 <Header/>
                 <Cards cardsDataArr={cardsDataArr}/>
                 <ThirdSection/>
          </div>
        )
    }
}

export default MainArea