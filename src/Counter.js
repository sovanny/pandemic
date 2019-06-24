import React from 'react';
import Button from '@material-ui/core/Button';
import './counter.css';

export class GameStart extends React.Component {
   
    render() {
        return (
            React.createElement("div", { className: 'game-start' }, startText(this.props.isStarted)
            )
        );
    }
}


export class Counter extends React.Component {
    render() {
        return React.createElement("div", { className: 'counter' },
            this.props.minutes + ':' + this.props.seconds

        );
    }
}
export class AddToken extends React.Component {
    render(){
        return (
            <Button variant="contained" color="primary" className="token-btn" onClick={handleClick(this.props)}>
            {startTextBtn(this.props.isStarted)}
            </Button>
        )
    }
}


function startText(started) {
    if(started) return "Press space to add one token";
    else return "Press space to start timer";
}

function startTextBtn(started) {
    if(started) return "Add token";
    else return "Start timer";
}

function handleClick(props){
    if (props.isStarted) return props.addChip;
    else  return props.startCountDown;
  } 
