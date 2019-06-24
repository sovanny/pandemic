import React from 'react';
import { Counter, GameStart, AddToken } from './Counter.js';
import { Chips } from './Chips.js';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      minutes: '08',
      chips: 3,
      chipsPile: 6,
      chipsSpent: 0,
      isStarted: false
    }
    this.chipTotal = 9;
    this.secondsRemaining = 0;
    this.intervalHandle = 0;
    this.hourglass = 0;
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
    this.spacePress = this.spacePress.bind(this);
    this.addChip = this.addChip.bind(this);
  }

  spacePress(event) {
    if (event.keyCode === 32) {
      if (this.state.isStarted) this.addChip();
      else this.startCountDown();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.spacePress, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.spacePress, false);
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
    if (min === 0 & sec === 0) {
      alert("You lose :(");
      clearInterval(this.intervalHandle);
    }
    this.secondsRemaining--
    this.hourglass++;
    if (this.hourglass == 120) {
      this.hourglass = 0;
      this.setState({
        chips: this.state.chips - 1,
        chipsSpent: this.state.chipsSpent + 1
      })

    }
  }

  startCountDown() {
    this.setState({
      isStarted: true
    });
    this.intervalHandle = setInterval(this.tick, 1000);
    const time = this.state.minutes;
    this.secondsRemaining = time * 60;
    this.setState({
      isClicked: true
    })
  }

  addChip() {
    if (this.state.chipsPile > 0) {
      this.setState({
        chips: this.state.chips + 1,
        chipsPile: this.chipTotal - (this.state.chips + 1),
      })
      this.secondsRemaining = this.secondsRemaining + 120;
    }
    else {
      console.log("No tokens to acquire!!");
    }
  }


  render() {
    return (
      <div className="App" >
        <div className="App-body">
          <GameStart startCountDown={this.startCountDown} isStarted={this.state.isStarted} />
          <Counter minutes={this.state.minutes} seconds={this.state.seconds} />
          <AddToken isStarted={this.state.isStarted} addChip={this.addChip} startCountDown={this.startCountDown} />
          <Chips chipText='Chips in possesion' nChips={this.state.chips} />
          <Chips chipText='Chips to acquire' nChips={this.state.chipsPile} />
          <Chips chipText='Spent chips' nChips={this.state.chipsSpent} />
        </div>
      </div>
    );
  }

}
export default App;


