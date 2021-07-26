import React from 'react'
import classes from './total-visit-section.module.css'
import './total-visit-section.css'

class TotalVisitSection extends React.Component{
    render(){
        return(
            <div className={classes["total-visit-section"]}>
               <div className={classes["top-section"]}>
                  <div className={classes["left-section"]}>Total visits</div>
                  <div className={classes["right-section"]}>
                      <span className={classes["horizontal-line"]}></span>
                      <span className={classes["text-before-input"]}>Provisions Month</span>
                      <div className={classes["month-input-container"]}>
                          <input className={classes["month-input"]}/>
                          <span className={classes["input-name"]}>Month</span>
                          <span className="material-icons calender-icon">
                            calendar_today
                          </span>
                      </div>
                      <span className="material-icons">
                        more_horiz
                      </span>
                  </div>
               </div>
               <div className={classes["bottom-section"]}>
                   
               </div>
            </div>
        )
    }
}

export default TotalVisitSection