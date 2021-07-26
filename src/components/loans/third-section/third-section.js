import React from 'react'
import classes from './third-section.module.css'

class ThirdSection extends React.Component{
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
            <div className={classes.Header}>
               <div className={classes['left-section']}>
                  <input 
                    onInput={(e)=>{this.onKeywordInput(e)}}
                    onBlur={()=>{this.onKeywordInputBlur()}}
                    type="text" 
                    name="search-keyword"
                   />
                   <div id="EnterKeyword">Search by name/number</div>
                   <i id="SearchIcon" className="fas fa-search"></i>
                </div>
               <div className={classes.RightSection}>
                  <div>
                      <div>Filter by</div>
                      <i className="fas fa-chevron-down"></i>
                  </div>
                  <div>
                      <div>status</div>
                      <i className="fas fa-chevron-down"></i>
                  </div>
               </div>
            </div>
        )
    }
}

export default ThirdSection