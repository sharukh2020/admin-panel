import React from 'react'
import classes from './left-third-section.module.css'

class LeftThirdSection extends React.Component{
    render(){
        const tableRows=this.props.cardsDataArr.map((item,pos)=>{
            return(
                <div className={classes["table-row"]} key={pos}>
                    <span className="material-icons" style={{display:`${this.props.cellRightIcon}`}}>more_vert</span>
                    <div className={classes["table-cell"]}>
                        <div className={classes["left-square"]}>
                         <span className="material-icons">notifications</span>
                        </div>
                        <div className={classes["cell-1-text"]}>
                            <div className={classes["post-data-2"]}>
                                {item.eventName}
                            </div>
                        </div>
                    </div>
                    <div className={classes["table-cell"]}>
                        <div className={classes["cell-2-text"]} style={{color:`${this.props.eventTime}`}}>
                            {item.eventTime}
                            <div className={classes["time-remained-to-event"]} style={{display:`${item.timeRemained}`}}>
                               Starting in 10 minutes
                            </div>
                        </div>
                    </div>
                    <div className={classes["table-cell"]}>
                        <div className={classes["cell-2-text"]}>
                            {item.hostName}
                        </div>
                    </div>
                    <div className={classes["table-cell"]}>
                        <div className={classes["status-indicator"]}>
                            {item.eventStatus}
                        </div>
                    </div>
               </div>
            )
        })
        return(
            <div className={classes['main-container']}>
               <div className={classes['upper-section']}>
                   <div className={classes['us-left-section']}>
                      {this.props.event}
                   </div>
                   <div className={classes['us-right-section']} style={{display:`${this.props.dropdown}`}}>
                    <div>
                        <div>Upcoming</div>
                        <i className="fas fa-chevron-down"></i>
                    </div>
               </div>
               </div>
               <div className={classes["table-body"]}>
                    {tableRows}
                 </div>
            </div>
        )
    }
}

export default LeftThirdSection