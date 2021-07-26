import React from 'react'
import classes from './left-section.module.css'
import {Link} from 'react-router-dom'

class LeftSection extends React.Component{
    render(){
        return(
            <div className={classes['main-container']}>
              <div className={classes['add-new-post-text']}>
                 Add new post
              </div>
              <input 
                className={classes['your-title-input']} 
                type='text' 
                name='title'
                placeholder='Your title'
               />
               <div className={classes['search-drop-down']}>
               <input 
                className={classes['search-input']} 
                type='text' 
                name='search-keyword'
                placeholder='Select a topic'
               />
               <span className="material-icons">expand_more</span>
               </div>
               <div className={classes['buttons-section']}>
                   <Link to=''>
                     <button>
                        <span className="material-icons">add</span>
                        Add image
                    </button>
                     </Link>
                     <Link to=''>
                     <button>
                        <span className="material-icons">add</span>
                        Add video
                    </button>
                     </Link>
                </div>
                <div className={classes['write-your-article-section']}>
                    <div className={classes['wyas-upper-section']}>
                        Formatting
                    </div>
                    <textarea className={classes['wyas-text-input-area']} defaultValue='Write your article/Description:'>
                        
                    </textarea>
                </div>
            </div>
        )
    }
}

export default LeftSection