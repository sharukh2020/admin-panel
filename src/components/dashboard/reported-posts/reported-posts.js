import React from 'react'
import { cardsDataArr } from './cardsDataArr'
import classes from './reported-posts.module.css'

class ReportedPosts extends React.Component{
    render(){
        const tableRows=cardsDataArr.map((item,pos)=>{
            return(
                <div className={classes["table-row"]} key={pos}>
                    <div className={classes["table-cell"]}>
                        <div className={classes["left-square"]}>

                        </div>
                        <div className={classes["cell-1-text"]}>
                            {item.postData}
                        </div>
                    </div>
                    <div className={classes["table-cell"]}>
                        <div className={classes["left-circle"]}>

                        </div>
                        <div className={classes["cell-2-text"]}>
                            {item.userData}
                        </div>
                    </div>
                    <div className={classes["table-cell"]}>
                        <div className={classes["status-indicator"]}>
                            {item.statusData}
                        </div>
                    </div>
               </div>
            )
        })
        return(
            <div className={classes["main-container"]}>
              <div className={classes["upper-section"]}>
                 <span className={classes["left-text"]}>
                     Reported posts
                 </span>
                 <span className="material-icons">
                    arrow_right_alt
                 </span>
              </div>
              <div className={classes["lower-section"]}>
                 <div className={classes["table-head"]}>
                      <span>Post</span>
                      <span>User</span>
                      <span>Status</span>
                 </div>
                 <div className={classes["table-body"]}>
                    {tableRows}
                 </div>
              </div>
            </div>
        )
    }
}

export default ReportedPosts