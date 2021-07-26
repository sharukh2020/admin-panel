import React from 'react'
import classes from './first-section.module.css'

class FirstSection extends React.Component{
    render(){
        return(
          <div className={classes['main-container']}>
               <div className={classes['left-section']}>
                  Support
               </div>
               <div className={classes.RightSection}>
                  <div>
                      <div>Admin user</div>
                      <i className="fas fa-chevron-down"></i>
                  </div>
                  <div>
                      <div>status</div>
                      <i className="fas fa-chevron-down"></i>
                  </div>
               </div>
          </div>
        )
    }
}

export default FirstSection