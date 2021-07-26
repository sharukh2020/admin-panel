import React from 'react'
import classes from './sidebar.module.css'
import {Link} from 'react-router-dom'

class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            linksArrA:[
                {
                   linkName:'Dashboard',
                   path:'/'
                },
                {
                    linkName:'Posts',
                    path:'/posts'
                 },
                 {
                    linkName:'Events',
                    path:'/events'
                 },
                 {
                    linkName:'Loans',
                    path:'/loans'
                 },
                 {
                    linkName:'Prepaid Cards',
                    path:'/prepaid-cards'
                 }
                ],
            linksArrB:[
                {
                    linkName:'Support',
                    path:'/support'
                 },
                 {
                    linkName:'FAQs',
                    path:'/FAQs'
                 },
                 {
                    linkName:'Users',
                    path:'/users'
                 },
                 {
                    linkName:'Settings',
                    path:'/settings'
                 }
                ]
        }
    }
    render(){
        const sectionALinks=this.state.linksArrA.map((item,pos)=>{
            return(
                <div className={classes.Links} key={pos}>
                    <Link to={`${item.path}`}>  
                            {item.linkName}
                    </Link>
               </div>
            )
        })
        const sectionBLinks=this.state.linksArrB.map((item,pos)=>{
            return(
                <div className={classes.Links} key={pos}>
                     <Link to={`${item.path}`}>  
                            {item.linkName}
                    </Link>
                </div>
            )
        })
        return(
            <div className={classes.Sidebar}>
                <div className={classes.Heading}>
                    mahila.money
                </div>
                <div className={classes['Links-Section-A']}>
                    {sectionALinks}
                </div>
                <div className={classes['Links-Section-B-Label']}>
                   SYSTEM
                </div>
                <div className={classes['Links-Section-B']}>
                    {sectionBLinks}
                </div>
            </div>
        )
    }
}

export default Sidebar