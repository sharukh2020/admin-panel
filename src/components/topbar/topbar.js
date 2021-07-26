import React from 'react'
import classes from './topbar.module.css'

class Topbar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchKeyword:''
        }
    }
    onKeywordInput=(e)=>{
        document.getElementById('SearchIcon').style.display='none'
        document.getElementById('EnterKeyword').style.display='none'
        this.setState({searchKeyword:e.target.value})
    }
    onKeywordInputBlur=()=>{
        if(this.state.searchKeyword===''){
            document.getElementById('SearchIcon').style.display='block'
            document.getElementById('EnterKeyword').style.display='block' 
        }
    }

    render(){
        return(
            <div className={classes.Topbar}>
                <div className={classes.LeftSection}>
                  <input 
                    onInput={(e)=>{this.onKeywordInput(e)}}
                    onBlur={()=>{this.onKeywordInputBlur()}}
                    type="text" 
                    name="search-keyword"
                   />
                  <i id="SearchIcon" className="fas fa-search"></i>
                  <div id="EnterKeyword">Enter Keyword</div>
                </div>
                <div className={classes.RightSection}>
                  <div className={classes.NotificationLink}>Notifications</div>
                  <div className={classes.ProfileLink}></div>
                </div>
            </div>
        )
    }
}

export default Topbar