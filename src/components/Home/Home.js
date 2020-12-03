import React from 'react';
import styles from './Home.module.css';
import emoji from '../../assets/emoji.png'

const Home = (props) => {
    

    if(props.show){
        return(
            <div className={styles.Home}>
                <p className={styles.Date}>12.14.2020</p>
                <img src={emoji} onClick={props.nextPage} className={styles.Emoji}/>
            </div>
        );
    }else{
        return(null);
    }
    

}

export default Home;