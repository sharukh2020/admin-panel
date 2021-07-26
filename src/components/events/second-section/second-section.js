import React from 'react'
import classes from './second-section.module.css'
import {Link} from 'react-router-dom'

class SecondSection extends React.Component{
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
          <div className={classes['main-container']}>
                <div className={classes['left-section']}>
                  <input 
                    onInput={(e)=>{this.onKeywordInput(e)}}
                    onBlur={()=>{this.onKeywordInputBlur()}}
                    type="text" 
                    name="search-keyword"
                   />
                   <div id="EnterKeyword">Search</div>
                   <i id="SearchIcon" className="fas fa-search"></i>
                </div>
                <div className={classes['right-section']}>
                     <Link to='/shedule-event'>
                     <button>
                        <span className="material-icons">add</span>
                        Shedule event
                    </button>
                     </Link>
                </div>
          </div>
        )
    }
}

export default SecondSection