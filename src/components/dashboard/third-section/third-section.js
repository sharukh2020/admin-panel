import React from 'react'
import Cards from '../cards/cards'
import AverageSessionTime from '../average-session-time-section/average-session-time'
import NewSupportTicketsSection from '../new-support-tickets-section/new-support-tickets-section'
import ReportedPosts from '../reported-posts/reported-posts'
import classes from './third-section.module.css'
import TotalVisitSection from '../total-visit-section/total-visit-section'

class ThirdSection extends React.Component{
    constructor(props){
        super(props)
        this.state={
            rightSectionCardData:[
                {
                    mainIcon:"",
                    text1:"147",
                    text2:"Total prepaid transactions",
                    icon2:"trending_down",
                    text3:"4.07%",
                    text4:"Last week",
                    class:"card-4"
                  },
            ]
        }
    }
    render(){
        return(
              <div className={classes.ThirdSection}>
                   <div className={classes["left-section"]}>
                      <TotalVisitSection/>
                      <div className={classes["left-section-lower-part"]}>
                         <AverageSessionTime/>
                         <ReportedPosts/>
                      </div>
                   </div>
                   <div className={classes["right-section"]}>
                         <Cards cardsDataArr={this.state.rightSectionCardData} cardWidth={"100%"} padding={'0 15px'}/>
                         <NewSupportTicketsSection/>
                   </div>
               </div>
        )
    }
}

export default ThirdSection