import React from 'react';
import './YourMistake.css';
import ReframeContext from '../../context/reframe-context';
import config from '../../config';

export default class YourMistake extends React.Component {
    static contextType = ReframeContext;

    constructor(props) {
        super(props);
        this.state = {
            boxOpen: true,
            comment: '',
            plan_one_check: false,
            plan_two_check: false,
            plan_three_check: null,
            plan_four_check: null,
            plan_five_check: null
        }
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/comment/${this.props.id}`, {
            method: 'GET',
            })
            .then(res => res.json())
            .then(resJSON => {
                this.setState({
                    comment: resJSON,
                }, () => {
                    console.log(this.state.comment)
                    console.log(this.props.id)
                })
            })
    }

    handleClick() {
        this.setState({
            boxOpen: !this.state.boxOpen
        })
        // fetch(`${config.API_ENDPOINT}/plancheck/${this.props.id}`, {
        //     method: 'PATCH',
        //   })
        //   .then(res => res.json())
        //   .then(resJSON => {
        //     this.setState({
        //       comment: resJSON
        //     }, () => {
        //         console.log(this.state.comment)
        //         console.log(this.props.id)
        //     })
        //   })
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
                            <p>{this.props.date.slice(0, 10)}</p>
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
                                <li className='lineItem' onClick={e=>this.setState({plan_one_check: !this.state.plan_one_check})}>
                                    <p className='planText'>{this.props.planone}</p>
                                    {this.state.plan_one_check === false ? <div className='box'></div> :<div className='boxChecked'></div>}
                                </li>
                                <li onClick={e=>this.setState({plan_two_check: !this.state.plan_two_check})}>
                                    <p className='planText'>{this.props.plantwo}</p>
                                    {this.state.plan_two_check === false ? <div className='box'></div> :<div className='boxChecked'></div>}
                                </li>
                                <li onClick={e=>this.setState({plan_three_check: !this.state.plan_three_check})}>
                                    <p className='planText'>{this.props.planthree}</p>
                                    {this.state.plan_three_check === false ? <div className='box'></div> :<div className='boxChecked'></div>}
                                </li>
                                <li onClick={e=>this.setState({plan_four_check: !this.state.plan_four_check})}>
                                    <p className='planText'>{this.props.planfour}</p>
                                    {this.state.plan_four_check === false ? <div className='box'></div> :<div className='boxChecked'></div>}
                                </li>
                                <li onClick={e=>this.setState({plan_five_check: !this.state.plan_five_check})}>
                                    <p className='planText'>{this.props.planfive}</p>
                                    {this.state.plan_five_check === false ? <div className='box'></div> :<div className='boxChecked'></div>} 
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>Comments</h2>
                            {this.state.comment.map((comments, index) => <p key={index}>{comments.comment}</p>)}
                        </div>    
                        <button className='deleteButton' type='button' onClick={() => this.handleDelete()}>delete mistake</button>
                    </div> 
                    : 
                    <div>
                        <div className='boxTitle'>
                            <button onClick={() => this.handleClick()}>open</button>
                            <h2>{this.props.nickname}</h2>
                            <p>{this.props.date.slice(0, 10)}</p>
                        </div>
                    </div> 
                }
            </div>
        )
    }
}