import React from 'react';
import './counter.css';

export class ChipsInput extends React.Component {
    constructor(props) {
        super(props);
        this.keyPress = this.keyPress.bind(this);
     } 
     keyPress(e){
        if(e.keyCode == 13){
           this.props.startCountDown();
        }
     }
    render() {
        return (
            React.createElement("div", { className: 'chips-input' },
                inputText,
                
                <input type="number" 
                onChange={this.props.handleChange} onKeyDown={this.keyPress} required />
                
                //React.createElement("input", { className: 'input-field', type: 'number', chips: this.props.chips, handleChange: this.props.handleChange, required: true })
                //InputField(this.props)
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

//export const Counter = () => {}


function initCounter(tokens) {
    const startMinutes = tokens * 2;
    return startMinutes;
}

const inputText = (<h3>Input number of starting chips</h3>)

// Hur tusan använder man ett sånt här element?
// const InField = ({ c }) => {
//     return {
//         type: 'h1',
//         children: c
//     }
// }

function InputField(props) {
    return (
        <input className='input-field' type='number' chips={props.chips} handleChange={props.handleChange} value={props.chips}required>
        </input>
    );
}