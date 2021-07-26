import React from 'react'
import PrePaidCardsMainArea from '../../components/prepaid-cards/prepaid-cards-main-area/prepaid-cards-main-area'
import Sidebar from '../../components/sidebar/sidebar'
import Topbar from '../../components/topbar/topbar'
import classes from './prepaid-cards.module.css'

class PrePaidCards extends React.Component{
    render(){
        return(
            <div className={classes['main-container']}>
              <Topbar/>
              <Sidebar/>
              <PrePaidCardsMainArea/>
            </div>
        )
    }
}

export default PrePaidCards