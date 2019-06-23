import React from 'react';
import { Counter, ChipsInput } from './Counter.js';
import {Chips} from './Chips.js';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      minutes: '06',
      chips: 3,
      chipsPile: 6,
      chipsSpent: 0,
      isClicked: false
    }
    this.chipTotal = 9;
    this.secondsRemaining = 0;
    this.intervalHandle = 0;
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleChange(event) {
    let enteredValue = parseInt(event.target.value);
    if(enteredValue >= 1){
      this.setState({
        minutes: '0' + enteredValue * 2,
        chips: enteredValue,
        chipsPile: this.chipTotal - enteredValue,
      })
    }else{
      this.setState({
        minutes: '00',
        chips: 3
      })
    }
   
    
  }
  keyPress(e){
    if(e.keyCode === 'Enter'){
       console.log('value', e.target.value);
       // put the login here
    }
 }

  tick() {
    const min = Math.floor(this.secondsRemaining / 60);
    const sec = this.secondsRemaining - (min * 60);
    this.setState({
      minutes: min,
      seconds: sec,
    })
    if (sec < 10) this.setState({ seconds: "0" + this.state.seconds })
    if (min < 10) this.setState({ minutes: "0" + min })
    if (min === 0 & sec === 0) clearInterval(this.intervalHandle);
    this.secondsRemaining--
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    const time = this.state.minutes;
    this.secondsRemaining = time * 60;
    this.setState({
      isClicked: true
    })
  }


  render() {
    const clicked = this.state.isClicked;
    if (clicked) {
      // do smth?
    }
    return (
      <div className="App" >
        <div className="App-body">
          <ChipsInput startCountDown={this.startCountDown} handleChange={this.handleChange}/>
          <Counter minutes={this.state.minutes} seconds={this.state.seconds} />
          <Chips chipText='Chips in possesion' nChips={this.state.chips}/>
          <Chips chipText='Chips to acquire' nChips={this.state.chipsPile}/>
          <Chips chipText='Spent chips' nChips={this.state.chipsSpent}/>
        </div>
      </div>
    );
  }

}

export default App;


