import React from 'react'
import classes from './second-section.module.css'

class SecondSection extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tableHeadRowCellData:[
                {
                    name:'Transaction ID',
                    width:'20%'
                },
                {
                    name:'User',
                    width:'15%'
                },
                {
                    name:'Subject',
                    width:'25%'
                },
                {
                    name:'Status',
                    width:'20%'
                },
                {
                    name:'Assigned to',
                    width:'20%'
                }
            ],
            tableRowData:[
                {
                    transactionID:'1231234',
                    time:'2:00 PM',
                    userName:'Merril Dinz',
                    subject:'Loan application',
                    status:'Ongoing',
                    statusColor:'white',
                    statusBgColor:'#3EAF49'
                },
                {
                    transactionID:'1231234',
                    time:'2:00 PM',
                    userName:'Merril Dinz',
                    subject:'Loan application',
                    status:'Ongoing',
                    statusColor:'white',
                    statusBgColor:'#3EAF49'
                },
                {
                    transactionID:'1231234',
                    time:'2:00 PM',
                    userName:'Merril Dinz',
                    subject:'Loan application',
                    status:'On Hold',
                    statusColor:'white',
                    statusBgColor:'#FFAD47'
                },
                {
                    transactionID:'1231234',
                    time:'2:00 PM',
                    userName:'Merril Dinz',
                    subject:'Loan application',
                    status:'On Hold',
                    statusColor:'white',
                    statusBgColor:'#FFAD47'
                },
                {
                    transactionID:'1231234',
                    time:'2:00 PM',
                    userName:'Merril Dinz',
                    subject:'Loan application',
                    status:'Closed',
                    statusColor:'white',
                    statusBgColor:'#C4C4C4'
                },
                {
                    transactionID:'1231234',
                    time:'2:00 PM',
                    userName:'Merril Dinz',
                    subject:'Loan application',
                    status:'Closed',
                    statusColor:'white',
                    statusBgColor:'#C4C4C4'
                },
            ]
        }
    }
    render(){
        const tableHeadRowCells=this.state.tableHeadRowCellData.map((item,pos)=>{
            return(
                <div key={pos} className={classes['table-head-row-cell']} style={{width:`${item.width}`}}>
                    {item.name}
                </div>
            )
        })
        const tableRows=this.state.tableRowData.map((item,pos)=>{
            return(
                <div key={pos} className={classes['table-row']}>
                       <div className={[classes['table-row-cell'],classes['trc-1']].join(' ')} style={{width:'5%'}}>
                            <div className={classes['thrc-one-square']}></div>
                        </div>
                        <div className={[classes['table-row-cell'],classes['trc-2']].join(' ')} style={{width:'20%'}}>
                          <div> {item.transactionID}  </div>  
                          <div>{item.time}</div>
                        </div>
                        <div className={[classes['table-row-cell'],classes['trc-3']].join(' ')} style={{width:'15%'}}>
                            <div>{item.userName}</div>
                        </div>
                        <div className={[classes['table-row-cell'],classes['trc-4']].join(' ')} style={{width:'25%'}}>
                            {item.subject}
                        </div>
                        <div className={[classes['table-row-cell'],classes['trc-5']].join(' ')} style={{width:'20%'}}>
                            <div style={{color:`${item.statusColor}`,backgroundColor:`${item.statusBgColor}`}}>{item.status}</div>
                        </div>
                        <div className={[classes['table-row-cell'],classes['trc-6']].join(' ')} style={{width:'20%'}}>
                            <span>Username</span>
                            <span className="material-icons">keyboard_arrow_down</span>
                        </div>
                    </div>
            )
        })
        return(
            <div className={classes['main-container']}>
                <div className={classes['table']}>
                    <div className={classes['table-head-row']}>
                        <div className={classes['table-head-row-cell']} style={{width:'5%'}}>
                            <div className={classes['thrc-one-square']}></div>
                        </div>
                        {tableHeadRowCells}
                    </div>
                    {tableRows}
                </div>
                <div className={classes['right-section']}>
                   <div className={classes['rs-upper-section']}>
                        <div className={classes['rs-us-left-section']}>
                            <div className={classes['rs-us-ls-left-circle']}></div>
                            <div className={classes['rs-us-ls-text-section']}>
                                <div>1231234 - Ticket heading</div>
                                <div>
                                    <span>User  - 99999 99999</span>
                                    <span>2h ago</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes['rs-us-right-section']}>
                            <span>Ongoing</span>
                            <span class="material-icons">expand_more</span>
                        </div>
                   </div>
                   <div className={classes['rs-second-section']}>
                       <span>Assigned to</span>
                       <div>
                           <span>UserName</span>
                           <span class="material-icons">expand_more</span>
                       </div>
                   </div>
                   <div className={classes['rs-third-section']}>
                       <textarea defaultValue='Ticket Message'>

                       </textarea>
                   </div>
                   <div className={classes['rs-fourth-section']}>
                       <div></div>
                       <div></div>
                   </div>
                   <div className={classes['rs-last-section']}>
                      <div>Chat</div>
                      <div>
                          <span>Attach File</span>
                          <span>Send and Close</span>
                      </div>
                   </div>

                </div>
            </div>
        )
    }
}

export default SecondSection