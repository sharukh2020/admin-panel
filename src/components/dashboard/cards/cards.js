import React from 'react'
import classes from './cards.module.css'
import './cards.css'

class Cards extends React.Component{
    render(){
        const cards=this.props.cardsDataArr.map((item,pos)=>{
            return(
                <div className={classes.Card} style={{width:`${this.props.cardWidth}`}} key={pos}>
                <div className={`${classes.LeftSection} ${item.class}`}>
                   <span className={`material-icons ${item.mainIcon}`}>
                      {item.mainIcon}
                    </span>
                </div>
                <div className={classes.RightSection}>
                   <div>{item.text1}</div>
                   <div>{item.text2}</div>
                   <div className={classes.LastPart}>
                       <div>
                          <span className={`material-icons ${item.icon2}`}>
                              {item.icon2}
                          </span>
                          <span style={{marginLeft:'5px'}} className={item.icon2}>{item.text3}</span>
                       </div>
                       <span>{item.text4}</span>
                   </div>
                </div>
            </div>
            )
        })
        return(
           <div className={classes.CardsContainer}>
               {cards}
           </div>
        )
    }
}

export default Cards