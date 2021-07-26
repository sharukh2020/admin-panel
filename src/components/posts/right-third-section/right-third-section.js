import React from 'react'
import classes from './right-third-section.module.css'

class RightThirdSection extends React.Component{
    render(){
        return(
            <div className={classes['main-container']}>
             <div className={classes['upper-section']}>
              <div className={classes['us-left-section']}>
                <div className={classes['uls-left-circle']}></div>
                <div className={classes['uls-text-section']}>
                    <div>#home_business</div>
                    <div>
                        <span>Posted by Admin</span>
                        <span>1h ago</span>
                    </div>
                </div>
              </div>
              <div className={classes['us-right-section']}>
                <span className="material-icons">delete</span>
                <span className="material-icons">mode_edit_outline</span>
                <span className="material-icons">more_vert</span>
              </div>
             </div>
             <div className={classes['lower-section']}>
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
               <div className={classes['likes-comments']}>
                       <span>251 Likes</span>
                       <span>200 comments</span>
               </div>
               <div className={classes['comments-section']}>
                 <div className={classes['comment-box']}>
                     <div className={classes['cb-left-circle']}></div>
                     <div className={classes['cb-text-section']}>
                       <div className={classes['cb-ts-upper-section']}>
                          <div className={classes['cb-ts-us-left-section']}>
                             <span>Adreeta Arora</span>
                             <span>1d</span>
                          </div>
                          <span className="material-icons" style={{fontSize:'15px'}}>delete</span>
                       </div>
                       <div className={classes['cb-ts-lower-section']}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ornare lorem non sed egestas libero, nisl enim. 
                       </div>
                     </div>
                 </div>
               </div>
             </div>
            </div>
        )
    }
}

export default RightThirdSection