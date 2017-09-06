import React, {Component} from 'react';
import partyPopper from '../assets/party.jpg'
import './App.css';

class AgeStats extends Component{

timeSince(date){
    let today = new Date().getTime();
    let birthday_Date = new Date(date).getTime();
    let diffrence = Math.abs(today-birthday_Date);

    let days = Math.floor(diffrence / (1000 * 3600 * 24))
    let years = Math.floor(days/365);
    days -= years*365;

    let months = Math.floor(days/31);
    days -= months * 31;
   
    return `${years} years, ${months} months and ${days} days!`

}

    render(){
        return(
            <div>
                <h3>{ this.props.date}</h3>
                <h4>{ this.timeSince(this.props.date)}</h4>
                <img src = {partyPopper} alt= "party-popper"  className ="partyPopper"/>
            </div>
        )
    }
}

export default AgeStats;