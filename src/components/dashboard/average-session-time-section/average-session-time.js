import React from 'react'
import classes from './average-session-time.module.css'

class AverageSessionTime extends React.Component{
    render(){
        return(
            <div className={classes["main-container"]}>
                <div className={classes["top-section"]}>
                   <span className={classes["upper-text"]}>Average session time</span>
                   <div className={classes["drop-down"]}>
                      <span className={classes["drop-down-text"]}>Last week</span>
                      <span className="material-icons" style={{color:"#F2F2F2"}}>
                          arrow_drop_down
                      </span>
                   </div>
                </div>
                <div className={classes["bottom-section"]}>

                </div>
            </div>
        )
    }
}

export default AverageSessionTime