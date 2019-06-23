import React from 'react';
import './chips.css';

class Chip extends React.Component {
    render() {
        return (
            <div>

                <div className="chip"></div>
            </div>
        )
    }
}

export class Chips extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h4>{this.props.chipText}</h4>
                <div className='chip-container'>
                    {[...Array(this.props.nChips).keys()].map(i => {
                        return <Chip key={i} />
                    })}
                </div>
            </div>
        )
    }
}

