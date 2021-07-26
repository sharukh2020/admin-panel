import React from 'react'
import classes from './left-section.module.css'
import {Link} from 'react-router-dom'

class LeftSection extends React.Component{
    render(){
        return(
            <div className={classes['main-container']}>
                <div className={classes['add-new-post-text']}>
                        Shedule an event
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
                            placeholder='Date and time'
                        />
                        <span className="material-icons">expand_more</span>
                </div>
                <div className={classes['last-section']}>
                    <div className={classes['ls-left-section']}>
                      <div className={classes['buttons-section']}>
                          <Link to=''>
                              <button>
                                 <span className="material-icons">add</span>
                                    Add cover image
                               </button>
                           </Link>
                       </div>
                       <div className={classes['write-your-article-section']}>
                           <div className={classes['wyas-upper-section']}>
                              Formatting
                           </div>
                          <textarea className={classes['wyas-text-input-area']} defaultValue='Write your article/Description:'></textarea>
                       </div>
                    </div>
                    <div className={classes['ls-right-section']}>
                         <div className={classes['lrs-upper-section']}>
                             <span>Host</span>
                             <span className="material-icons">add</span>
                         </div>
                         <input className={classes['lrs-upper-inputs']} type='email' name='email' placeholder="Email ID"/>
                         <input className={classes['lrs-upper-inputs']} type='number' name='phone-number' placeholder="Phone number"/>
                         <div className={classes['lrs-speaker-section']}>
                             <div className={classes['lrs-ss-upper-section']}>
                                 Speakers
                             </div>
                             <div className={classes['lrs-ss-lower-section']}>
                                <div></div>
                                <div>Add speaker image</div>
                             </div>
                         </div>
                         <input className={classes['lrs-lower-inputs']} type='text' name='spaeker-1-name' placeholder="Speaker 1 name"/>
                         <input className={classes['lrs-lower-inputs']} type='text' name='designation' placeholder="Designation"/>
                         <div className={classes['lrs-last-section']}>
                            <input type="checkbox" id="record-video" name="record" value="video"/>
                            <label htmlFor="record-video">Record video</label>
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftSection