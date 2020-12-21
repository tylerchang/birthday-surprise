import React, {Component} from 'react';
import styles from './Card.module.css';
import Confetti from 'react-confetti'
import cake from '../../assets/cake.png'
import emoji from '../../assets/emoji.png'



const ClosedCard = (props) => {
   return(
    <div onClick={props.open} className={styles.BirthdayCardClose}>
        <img src={cake} className={styles.cakeImage} alt="cake"/>
        <div className={styles.toFrom}> From: Tyler <br/> To: Hikari </div>
    </div>
   )
}

const OpenedCard = (props) => {
    return(
     <div onClick={props.close} className={styles.BirthdayCardOpen}>
         <div className={styles.Letter}>
             Dear Hikari, <br/> <br/> 
             This probably wasn't what you were expecting for a birthday card. 
             I figured I needed some practice applying the skills I learned from the web development course and 
             what better way to do it than a digital birthday experience! Sorry if it looks trashy as I'm still 
             in the middle of learning. 19 years old! I'm so priviledged and grateful to have known you for almost 4 of 
             those years and counting! That's a lot of time for meeting new people and making friends. Reflecting 
             on all the people I've met during my 19 years, you are a very special one. For the past 9 months, 
             I have valued every single moment with you. No joke bro. Just to name a few: sunrises, sunsets, 
             very very long facetime calls, listening to music, grocery store adventures, all the yummy foods, bike rides, 
             anytime we were at each other's houses, texting and calling during work breaks, study sessions, debates, 
             disagreements, "fights," the aquarium, working together, and lastly but definitely not least, doing nothing :) 
             Never have I felt so loved and you inspire me everyday to become a better person. The road ahead comes with many 
             challenges but I'm so excited to tackle it on with you! I love you so much! 
             <br/> <br/> Yours and only yours,
             <br/> 张嘉翔 </div>
         <img src={emoji}className={styles.proceedButton} onClick={props.proceed} alt="Proceed"/>
     </div>
    )
 }

 window.scrollTo(0, 0);

class Card extends Component {

    state = {
        cardOpened: false,
        confettiStatus: true
    }

    stopConfetti = () => {
        this.setState({confettiStatus: false})
    }

    cardClickHandler = () => {
        this.setState({cardOpened: !this.state.cardOpened, confettiStatus: !this.state.confettiStatus})
    }

    render(){
        if(this.props.show){
            return(
                <div className={styles.Card}>
                  <Confetti width="1700px" height="1000px" recycle={this.state.confettiStatus} tweenDuration='4000' numberOfPieces="100" />
                  <div className={styles.Title}>Happy Birthday Hikari</div>
                  {this.state.cardOpened ? <OpenedCard close={this.cardClickHandler} proceed={this.props.nextPage}/> : <ClosedCard open={this.cardClickHandler}/>}
                  
                </div>
            );
        }else{
            return(null);
        }
    } 

}


export default Card;
