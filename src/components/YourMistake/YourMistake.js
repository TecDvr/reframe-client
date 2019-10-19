import React from 'react';
import './YourMistake.css';
import ReframeContext from '../../context/reframe-context'

// delete button only shows after a few days of it being up...

export default class YourMistake extends React.Component {
    static contextType = ReframeContext;
    constructor(props) {
        super(props);
        this.state = {
            boxOpen: true
        }
    }

    handleClick() {
        this.setState({
            boxOpen: !this.state.boxOpen
        })
    }

    handleDelete() {
        console.log('deleted');
    }

    //onclick not on entire menu
    render() {
        return (
            <div className='yourMistakeContainer' onClick={() => this.handleClick()}>
                {this.state.boxOpen === false ?
                    <div>
                        <div className='boxTitle'>
                            <h2>{this.props.nickname}</h2>
                            <p>{this.props.date}</p>
                            {this.props.shared === true ? <p>This mistake is shared</p> : <p>You did not share this mistake</p>}
                        </div>
                        <div className='boxText'>
                            <p>{this.props.mistakemade}</p>
                        </div>
                        <div>
                            <p>your plan</p>
                        </div>
                        <button className='deleteButton' type='button' onClick={() => this.handleDelete()}>delete mistake</button>
                    </div> 
                    : 
                    <div>
                        <div className='boxTitle'>
                            <h2>{this.props.nickname}</h2>
                            <p>{this.props.date}</p>
                        </div>
                    </div> 
                }
            </div>
        )
    }
}