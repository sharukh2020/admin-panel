import React from 'react'
import classes from './left-third-section.module.css'
import { cardsDataArr } from './cardsDataArr'

class LeftThirdSection extends React.Component{
    render(){
        const tableRows=cardsDataArr.map((item,pos)=>{
            return(
                <div className={classes["table-row"]} key={pos}>
                    <div className={classes["table-cell"]}>
                        <div className={classes["left-square"]}>

                        </div>
                        <div className={classes["cell-1-text"]}>
                            <div className={classes["post-data-1"]}>
                               <span>{item.postData1}</span>
                               <span>{item.postData2}</span>
                            </div>
                            <div className={classes["post-data-2"]}>
                                {item.postData3}
                            </div>
                            <div className={classes["post-data-3"]}>
                               <span>{item.postData4}</span> 
                               <span>{item.postData5}</span> 
                            </div>
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
            <div className={classes['main-container']}>
               <div className={classes['upper-section']}>
                   <div className={classes['us-left-section']}>
                      All posts
                   </div>
                   <div className={classes['us-right-section']}>
                    <div>
                        <div>Today</div>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div>
                        <div>Filter by</div>
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