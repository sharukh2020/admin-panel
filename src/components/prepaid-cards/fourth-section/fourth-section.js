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
                    name:'Card number',
                    width:'22%'
                },
                {
                    name:'Action',
                    width:'12%'
                }
            ],
            tableRowData:[
                {
                    userName:'Merril Dinz',
                    status:'KYC',
                    phoneNumber:'9999999999',
                    date:'18.05.2020',
                    cardNumber:'1111 1111 1111 1111',
                    statusColor:'#FFB648',
                    statusBgColor:'rgba(255, 172, 50, 0.1)'
                },
                {
                    userName:'Merril Dinz',
                    status:'KYC',
                    phoneNumber:'9999999999',
                    date:'27.11.2019',
                    cardNumber:'1111 1111 1111 1111',
                    statusColor:'#FFB648',
                    statusBgColor:'rgba(255, 172, 50, 0.1)'
                },
                {
                    userName:'Merril Dinz',
                    status:'Active User',
                    phoneNumber:'9999999999',
                    date:'04.11.2019',
                    cardNumber:'1111 1111 1111 1111',
                    statusColor:'#5887FF',
                    statusBgColor:'rgba(88, 135, 255, 0.1)'
                },
                {
                    userName:'Merril Dinz',
                    status:'Active User',
                    phoneNumber:'9999999999',
                    date:'08.07.2020',
                    cardNumber:'1111 1111 1111 1111',
                    statusColor:'#5887FF',
                    statusBgColor:'rgba(88, 135, 255, 0.1)'
                },
                {
                    userName:'Merril Dinz',
                    status:'Active User',
                    phoneNumber:'9999999999',
                    date:'10.04.2020',
                    cardNumber:'1111 1111 1111 1111',
                    statusColor:'#55BB59',
                    statusBgColor:'rgba(85, 187, 89, 0.1)'
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
                           {item.date}    
                        </div>
                        <div className={[classes['table-row-cell'],classes['trc-six']].join(' ')} style={{width:'22%'}}>
                           <div>{item.cardNumber}</div>
                           <div>see balance</div>
                        </div>
                        <div className={[classes['table-row-cell'],classes['trc-seven']].join(' ')} style={{width:'12%'}}>
                            <div>
                              <span className="material-icons" style={{fontSize:'12px'}}>not_interested</span>
                              <span style={{marginLeft:'8px'}}>Block card</span>
                            </div>
                        </div>
                    </div>
            )
        })
        return(
            <div className={classes['main-container']}>
                <div className={classes['table-caption']}>
                    users
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