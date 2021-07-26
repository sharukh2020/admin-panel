import React from 'react'
import { cardsDataArr } from './cards-data-arr'
import classes from './new-support-tickets-section.module.css'

class NewSupportTicketsSection extends React.Component{
    render(){
        const cards=cardsDataArr.map((item,pos)=>{
            return(
                <div className={classes['card']} key={pos}>
                   <div className={classes['card-left-section']}>
                       <div className={classes['cls-square']}>

                       </div>
                       <div className={classes['cls-right-section']}>
                           <span>{item.text1}</span>
                           <span>{item.text2}</span>
                       </div>
                   </div>
                   <div className={classes['cards-right-section']}>
                       <span>{item.text3}</span>
                       <span className="material-icons">chevron_right</span>
                   </div>
                </div>
            )
        })
        return(
            <div className={classes['main-container']}>
              <div className={classes['sub-container']}>
                <div className={classes['upper-section']}>
                    <div className={classes['us-left-section']}>
                        <span className={classes['us-ls-text']}>New support tickets</span>
                        <span className="material-icons" style={{color:"#D0D1D2"}}>error_outline</span>
                    </div>
                    <div className={classes['us-right-section']}>
                         5
                    </div>
                </div>
                <div className={classes['lower-section']}>
                    {cards}
                </div>
              </div>
            </div>
        )
    }
}

export default NewSupportTicketsSection