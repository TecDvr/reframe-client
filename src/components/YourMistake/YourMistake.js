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

    render() {
        return (
            <div className='yourMistakeContainer'>
                {this.state.boxOpen === false ?
                    <div>
                        
                        <div className='boxTitle'>
                            <button onClick={() => this.handleClick()}>close</button>
                            <h2>{this.props.nickname}</h2>
                            <p>{this.props.date}</p>
                            {this.props.shared === true ? <p>This mistake is shared</p> : <p>You did not share this mistake</p>}
                        </div>
                        <div className='boxText'>
                            <p>{this.props.mistakemade}</p>
                        </div>
                        <div>
                            <h2>Your Thoughts</h2>
                            <ul>
                                <li>{this.props.thoughts.went_wrong}</li>
                                <li>{this.props.thoughts.why_wrong}</li>
                                <li>{this.props.thoughts.what_doing}</li>
                                <li>{this.props.thoughts.what_learn}</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Your Plan</h2>
                            <ul>
                                <li>{this.props.planone}<input type='checkbox'></input></li>
                                <li>{this.props.plantwo}<input type='checkbox'></input></li>
                                <li>{this.props.planthree}<input type='checkbox'></input></li>
                                <li>{this.props.planfour}<input type='checkbox'></input></li>
                                <li>{this.props.planfive}<input type='checkbox'></input></li>
                            </ul>
                        </div>
                        <button className='deleteButton' type='button' onClick={() => this.handleDelete()}>delete mistake</button>
                    </div> 
                    : 
                    <div>
                        <div className='boxTitle'>
                            <button onClick={() => this.handleClick()}>open</button>
                            <h2>{this.props.nickname}</h2>
                            <p>{this.props.date}</p>
                        </div>
                    </div> 
                }
            </div>
        )
    }
}