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
            plan_three_check: false,
            plan_four_check: false,
            plan_five_check: false
        }
    }

    componentDidMount() {
        Promise.all([
            fetch(`${config.API_ENDPOINT}/comment/${this.props.id}`, {
                method: 'GET',
            }),
            fetch(`${config.API_ENDPOINT}/checkbox/${this.props.id}`, {
                method: 'GET',
            }),
        ])
        .then(([comment, checkbox]) => {
            return Promise.all([comment.json(), checkbox.json()])
        })
        .then(([comments, checkboxs]) => {
            this.setState({
                comment: comments,
                plan_one_check: checkboxs[0].plan_one_check,
                plan_two_check: checkboxs[0].plan_two_check,
                plan_three_check: checkboxs[0].plan_three_check,
                plan_four_check: checkboxs[0].plan_four_check,
                plan_five_check: checkboxs[0].plan_five_check
            })
        })
    }

    handleClick() {
        this.setState({
            boxOpen: !this.state.boxOpen
        })
    }

    handleBoxCheck() {
        fetch(`${config.API_ENDPOINT}/plancheck/${this.props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
            })
            .then(res => {
                console.log('works')
            })
    }

    render() {
        return (
            <div className='yourMistakeContainer'>
                {this.state.boxOpen === false ?
                    <div>
                        
                        <div className='boxTitle'>
                            <button onClick={() => this.handleClick()}>close</button>
                            <h2>{this.props.nickname}</h2>
                            <h3>This mistake was: {this.props.bad === 1 ? <p>Not that bad</p> : this.props.bad === 2 ? <p>Kinda bad</p> : this.props.bad === 3 ? <p>Pretty bad</p> : <p>Really bad</p>}</h3>
                            <p>Mistake was made on: {this.props.date.slice(0, 10)}</p>
                            {this.props.shared === true ? <p>This mistake is shared</p> : <p>You did not share this mistake</p>}
                        </div>
                        <div className='boxText'>
                            <h3>{this.props.mistakemade}</h3>
                        </div>
                        <div>
                            <h2>My Thoughts</h2>
                            <ul>
                                <li className='lineItem'>- {this.props.thoughts.went_wrong}</li>
                                <li className='lineItem'>- {this.props.thoughts.why_wrong}</li>
                                <li className='lineItem'>- {this.props.thoughts.what_doing}</li>
                                <li className='lineItem'>- {this.props.thoughts.what_learn}</li>
                            </ul>
                        </div>
                        <div>
                            <h2>My Plan</h2>
                            <ul>
                                <li className='lineItem' onClick={e=>this.setState({plan_one_check: !this.state.plan_one_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.planone}</p>
                                    {this.state.plan_one_check === null || this.state.plan_one_check === false ? <div className='box'></div> :<div className='boxChecked'>X</div>}
                                </li>
                                <li className='lineItem' onClick={e=>this.setState({plan_two_check: !this.state.plan_two_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.plantwo}</p>
                                    {this.state.plan_two_check === null || this.state.plan_two_check === false ? <div className='box'></div> :<div className='boxChecked'>X</div>}
                                </li>
                                <li className='lineItem' onClick={e=>this.setState({plan_three_check: !this.state.plan_three_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.planthree}</p>
                                    {this.state.plan_three_check === null || this.state.plan_three_check === false ? <div className='box'></div> :<div className='boxChecked'>X</div>}
                                </li>
                                <li className='lineItem' onClick={e=>this.setState({plan_four_check: !this.state.plan_four_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.planfour}</p>
                                    {this.state.plan_four_check === null || this.state.plan_four_check === false ? <div className='box'></div> :<div className='boxChecked'>X</div>}
                                </li>
                                <li 
                                    className='lineItem' 
                                    onClick={e=> this.setState({plan_five_check: !this.state.plan_five_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.planfive}</p>
                                    {this.state.plan_five_check === null || this.state.plan_five_check === false ? <div className='box'></div> :<div className='boxChecked'>X</div>} 
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>Comments</h2>
                            {this.state.comment.map((comments, index) => <p className='commentText' key={index}>{comments.comment}</p>)}
                        </div>    
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