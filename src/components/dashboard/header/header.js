import React from 'react'
import classes from './header.module.css'

class Header extends React.Component{
    render(){
        return(
            <div className={classes.Header}>
               <div className={classes.LeftSection}>Dashboard</div>
               <div className={classes.RightSection}>
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
        )
    }
}

export default Header