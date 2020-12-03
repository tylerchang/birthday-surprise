import React from 'react';

import Gallery from 'react-photo-gallery';
import styles from './PhotoPage.module.css';
import pictureArray from './images';
import emoji from '../../assets/emoji.png'


let photos = [];

pictureArray.map(pic => {
  photos.push({
    src: pic,
    width: 1,
    height: 1
  })
})


const PhotoPage = (props) => {

  window.scrollTo(0, 0);

    let show = props.show;
    if(show){
        return(
            <div className={styles.PhotoPage}>
              <div className={styles.Title}>Some photos of us that I think you would like.....</div>
              <Gallery photos={photos} direction="row"/>
              <img src={emoji} className={styles.proceedButton} onClick={props.nextPage} />
            </div>
        );
    }else{
        return(null);
    }
    

}


export default PhotoPage;