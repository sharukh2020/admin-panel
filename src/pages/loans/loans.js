import React from 'react'
import LoansMainArea from '../../components/loans/loans-main-area/loans-main-area'
import Sidebar from '../../components/sidebar/sidebar'
import Topbar from '../../components/topbar/topbar'
import classes from './loans.module.css'

class Loans extends React.Component{
    render(){
        return(
            <div className={classes['main-container']}>
              <Topbar/>
              <Sidebar/>
              <LoansMainArea/>
            </div>
        )
    }
}

export default Loans