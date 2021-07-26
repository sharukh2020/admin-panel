import React from 'react'
import classes from './right-section.module.css'

class RightSection extends React.Component{
    render(){
        return(
            <div className={classes['main-container']}>
              <div className={classes['preview-text']}>
                  Preview
              </div>
                <div className={classes['card']}>
              <div className={classes['section-one']}>
                <div>
                   How to start saving for business capital ?
                </div>
                <div>
                  <span>06:00 - 07:00 PM</span>
                  <span>1 Hour</span>        
                </div>
              </div>
              <div className={classes['section-two']}>
                 <div className={classes['st-left-section']}></div>
                 <div className={classes['st-right-section']}>
                   <div>Siddhika Aggarwal</div>
                   <div>Founder of SHEROES Money</div>
                 </div>
              </div>
              <div className={classes['section-three']}>
                 
              </div>
              <div className={classes['section-four']}>
                <div>Details</div>
                <div>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta scelerisque vitae amet semper habitasse diam vulputate lectus. Integer ultrices ante euismod facilisis in scelerisque in sapien eu. Amet duis ultricies facilisi eget. Hendrerit amet.
                </div>
              </div>
            </div>
              <div className={classes['last-buttons-section']}>
                <button>Shedule</button>
                <button>Save as draft</button>
              </div>
            </div>
        )
    }
}

export default RightSection