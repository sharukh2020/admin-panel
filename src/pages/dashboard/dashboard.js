import React from 'react'
import MainArea from '../../components/dashboard/dashboard-main-area/main-area'
import Sidebar from '../../components/sidebar/sidebar'
import Topbar from '../../components/topbar/topbar'
import classes from './dashboard.module.css'

class Dashboard extends React.Component{
    render(){
        return(
            <div className={classes.Dashboard}>
              <Topbar/>
              <Sidebar/>
              <MainArea/>
            </div>
        )
    }
}

export default Dashboard

