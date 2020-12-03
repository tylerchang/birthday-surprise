import React from 'react';
import ReactPlayer from 'react-player';

import styles from './Video.module.css';
import emoji from '../../assets/emoji2.png'

const Video = (props) => {

    let show = props.show;
    if(show){
        return(
            <div className={styles.Video}>
              <div>And finally, our love for music.....</div>
              <ReactPlayer url="https://www.youtube.com/watch?v=CLwpEVhAuPk" 
              controls="true" 
              width="1000px" 
              height="1050px" 
              style={{"border": "10px solid rgb(160, 127, 97)",
                    "-webkit-box-shadow" : "0px 5px 198px 11px rgb(160, 127, 97)",
                    "-moz-box-shadow" : "0px 5px 198px 11px rgb(160, 127, 97)",
                    "box-shadow" : "0px 5px 198px 11px rgb(160, 127, 97)",
                    "margin": "20px",
                     }}/>
            <img src={emoji} onClick={props.nextPage} className={styles.Emoji} alt="Next"/>
            </div>
        );
    }else{
        return(null);
    }
    

}


export default Video;