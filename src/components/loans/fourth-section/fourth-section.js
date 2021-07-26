import React from 'react'
import classes from './fourth-section.module.css'

class FourthSection extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tableHeadRowCellData:[
                {
                    name:'User',
                    width:'18%'
                },
                {
                    name:'Status',
                    width:'12%'
                },
                {
                    name:'Phone number',
                    width:'20%'
                },
                {
                    name:'Date',
                    width:'18%'
                },
                {
                    name:'Form',
                    width:'11%'
                },
                {
                    name:'Documents',
                    width:'11%'
                },
                {
                    name:'Payment Link',
                    width:'12%'
                }
            ],
            tableRowData:[
                {
                    userName:'Merril Dinz',
                    status:'Verifying',
                    phoneNumber:'9999999999',
                    date:'18.05.2020',
                    time:'2:00 PM',
                    cardNumber:'1111 1111 1111 1111',
                    statusColor:'white',
                    statusBgColor:'#FEC400'
                },
                {
                    userName:'Merril Dinz',
                    status:'Approved',
                    phoneNumber:'9999999999',
                    date:'27.11.2019',
                    time:'2:00 PM',
                    cardNumber:'1111 1111 1111 1111',
                    statusColor:'white',
                    statusBgColor:'#55BB59'
                },
                {
                    userName:'Merril Dinz',
                    status:'Rejected',
                    phoneNumber:'9999999999',
                    date:'04.11.2019',
                    time:'2:00 PM',
                    cardNumber:'1111 1111 1111 1111',
                    statusColor:'white',
                    statusBgColor:'#E13E3E'
                },
                {
                    userName:'Merril Dinz',
                    status:'Active User',
                    phoneNumber:'9999999999',
                    date:'08.07.2020',
                    time:'2:00 PM',
                    cardNumber:'1111 1111 1111 1111',
                    statusColor:'#FFAD47',
                    statusBgColor:'rgba(254, 196, 0, 0.15)'
                },
                {
                    userName:'Merril Dinz',
                    status:'Verifying',
                    phoneNumber:'9999999999',
                    date:'10.04.2020',
                    time:'2:00 PM',
                    cardNumber:'1111 1111 1111 1111',
                    statusColor:'white',
                    statusBgColor:'#FEC400'
                }
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
                       <div className={[classes['table-row-cell'],classes['trc-one']].join(' ')} style={{width:'5%'}}>
                            <div className={classes['thrc-one-square']}></div>
                        </div>
                        <div className={[classes['table-row-cell'],classes['trc-two']].join(' ')} style={{width:'18%'}}>
                            <div></div>
                            <div>{item.userName}</div>
                        </div>
                        <div className={[classes['table-row-cell'],classes['trc-three']].join(' ')} style={{width:'12%'}}>
                            <div style={{color:`${item.statusColor}`,backgroundColor:`${item.statusBgColor}`}}>{item.status}</div>
                        </div>
                        <div className={[classes['table-row-cell'],classes['trc-four']].join(' ')} style={{width:'20%'}}>
                            {item.phoneNumber}
                        </div>
                        <div className={[classes['table-row-cell'],classes['trc-five']].join(' ')} style={{width:'18%'}}>
                          <div> {item.date}  </div>  
                          <div>{item.time}</div>
                        </div>
                        <div className={[classes['table-row-cell'],classes['trc-six']].join(' ')} style={{width:'11%'}}>
                            <span style={{color:'black',fontSize:'17px',marginBottom:'8px'}} className="material-icons">insert_drive_file</span>
                            <div>download</div>
                        </div>
                        <div className={[classes['table-row-cell'],classes['trc-seven']].join(' ')} style={{width:'11%'}}>
                            <span style={{color:'black',fontSize:'17px',marginBottom:'8px'}} className="material-icons">summarize</span>
                            <div>download</div>
                        </div>
                        <div className={[classes['table-row-cell'],classes['trc-eight']].join(' ')} style={{width:'12%'}}>
                            <span style={{color:'black',fontSize:'17px',marginBottom:'8px'}} className="material-icons">open_in_new</span>
                            <div>upload</div>
                        </div>
                    </div>
            )
        })
        return(
            <div className={classes['main-container']}>
                <div className={classes['table-caption']}>
                    <div className={classes['caption']}>
                        Users
                    </div>
                    <div className={classes['download-upload-btns']}>
                      <div className={classes['download-btn']}>
                        <span style={{marginRight:'8px'}} className="material-icons">vertical_align_bottom</span>
                        <span>DownLoad</span>
                      </div>
                      <div className={classes['upload-btn']}>
                         <span style={{marginRight:'8px'}} className="material-icons">upgrade</span>
                         <span>Upload</span>
                      </div>
                    </div>
                </div>
                <div className={classes['table']}>
                    <div className={classes['table-head-row']}>
                        <div className={classes['table-head-row-cell']} style={{width:'5%'}}>
                            <div className={classes['thrc-one-square']}></div>
                        </div>
                        {tableHeadRowCells}
                    </div>
                    {tableRows}
                </div>
            </div>
        )
    }
}

export default FourthSection