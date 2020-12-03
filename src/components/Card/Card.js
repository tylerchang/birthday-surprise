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
         <div className={styles.Letter}>Hi Hikari, <br/> <br/> You have lived 19 years on this planet! I'm priviledged and so grateful to have known you for almost 4 of those years and counting! That's a lot of time for meeting new people and making friends. Reflecting on all the people I've met during my 19 years, you are a very special one. For the past 9 months, I have valued every single moment with you. No joke bro. Just to name a few: sunrises, sunsets, very very long facetime calls, long movies that we both had to sit through just so we had an excuse to talk to each other, listening to music, grocery store shopping, all the yummy foods you showed me, bike rides, anytime we were at each other's houses, texting and calling during work breaks, all the study sessions, debates, disagreements, "fights," the aquarium, working together, and lastly but definitely not least, doing nothing :) Never have I felt so loved and you inspire me everyday to become a better person. The road ahead comes with many challenges but I'm so excited to tackle it on with you! I love you so much! <br/> <br/> Yours and only yours,<br/> Tyler </div>
         <img src={emoji}className={styles.proceedButton} onClick={props.proceed} />
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