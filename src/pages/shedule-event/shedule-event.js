import React from 'react'
import SheduleEventMainArea from '../../components/shedule-event/shedule-event-main-area/shedule-event-main-area'
import Sidebar from '../../components/sidebar/sidebar'
import Topbar from '../../components/topbar/topbar'
import classes from './shedule-event.module.css'

class SheduleEvent extends React.Component{
    render(){
        return(
            <div className={classes['main-container']}>
              <Topbar/>
              <Sidebar/>
              <SheduleEventMainArea/>
            </div>
        )
    }
}

export default SheduleEvent