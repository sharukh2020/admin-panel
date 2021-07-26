import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import SupportMainArea from '../../components/support/support-main-area/support-main-area'
import Topbar from '../../components/topbar/topbar'
import classes from './support.module.css'

class Support extends React.Component{
    render(){
        return(
            <div className={classes['main-container']}>
              <Topbar/>
              <Sidebar/>
              <SupportMainArea/>
            </div>
        )
    }
}

export default Support