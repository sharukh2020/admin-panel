import React from 'react'
import EventsMainArea from '../../components/events/events-main-area/events-main-area'
import Sidebar from '../../components/sidebar/sidebar'
import Topbar from '../../components/topbar/topbar'
import classes from './events.module.css'

class Events extends React.Component{
    render(){
        return(
            <div className={classes['main-container']}>
              <Topbar/>
              <Sidebar/>
              <EventsMainArea/>
            </div>
        )
    }
}

export default Events