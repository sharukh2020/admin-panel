import React from 'react'
import classes from './right-section.module.css'

class RightSection extends React.Component{
    render(){
        return(
            <div className={classes['main-container']}>
              <div className={classes['preview-text']}>
                  Preview
              </div>
              <div className={classes['video-section']}>
                <div className={classes['vs-upper-section']}>
                    <div className={classes['vsus-left-circle']}></div>
                    <div className={classes['vsus-text-section']}>
                        <div>#home_business</div>
                        <div>
                            <span>Posted by Admin</span>
                            <span>1h ago</span>
                        </div>
                    </div>
                </div>
                <div className={classes['vs-lower-section']}>
                    <iframe  
                    title='video'
                    src="https://www.youtube.com/embed/IqrBr-KT5qk"
                    style={{border:'0'}}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    >
                    </iframe>
                    <div className={classes['video-details']}>
                        <div className={classes['video-name']}>
                            11 tips to run a successful home business.
                        </div>
                        <div className={classes['video-description']}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor malesuada quam justo blandit imperdiet suspendisse.
                        </div>
                    </div>
                </div>
              </div>
              <div className={classes['last-buttons-section']}>
                <button>Post</button>
                <button>Save as draft</button>
              </div>
            </div>
        )
    }
}

export default RightSection