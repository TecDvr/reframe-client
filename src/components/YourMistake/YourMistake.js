import React from 'react';
import './YourMistake.css';
import { withRouter } from 'react-router-dom';
import ReframeContext from '../../context/reframe-context';
import config from '../../config';

class YourMistake extends React.Component {
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

    handleDelete(e) {
        e.preventDefault();
        fetch(`${config.API_ENDPOINT}/delete/${this.props.id}`, {
            method: 'DELETE'
            })
            .then(res => {
                
            })
    }

    render() {
        return (
            <div className='yourMistakeContainer'>
                {this.state.boxOpen === false ?
                    <div>
                        <div className='boxTitle'>
                            <div className='buttonContainerMistake'>
                                <button className='openButton' onClick={() => this.handleClick()}><p className='openIcon'><i className="fas fa-minus"></i></p></button>
                                <button 
                                className='openButton'
                                onClick={(e) => this.handleDelete(e)}
                                ><p className='openIcon'><i className="fas fa-trash-alt"></i></p>   
                                </button> 
                            </div>
                            <h2 className='yourMistakeTitle'>{this.props.nickname}</h2> 

                            <div className='detailContainer'>
                                <p><i className="far fa-calendar-check"></i> {this.props.date.slice(0, 10)}</p>
                                {this.props.shared === true ? <p className='shareIconMain'><i className="fas fa-globe-americas"></i></p> : null}
                                <div className='mistakeWasBad'>{this.props.bad === 1 ? <p className='mistakeWasBadInsert'>Not that bad <i className="far fa-thumbs-down"></i></p> : this.props.bad === 2 ? <p className='mistakeWasBadInsert'>Kinda bad <i className="far fa-sad-tear"></i></p> : this.props.bad === 3 ? <p className='mistakeWasBadInsert'>Pretty bad <i className="fas fa-poo"></i> </p> : <p className='mistakeWasBadInsert'>Really bad <i className="fas fa-skull-crossbones"></i></p>}</div>
                            </div>
                        </div>
                        <div className='boxText'>
                            <p className='boxTextTitle'><i className="fas fa-chalkboard-teacher"></i> my mistake:</p>
                            <p>{this.props.mistakemade}</p>
                        </div>
                        <div className='boxText'>
                            <p className='boxTextTitle'><i className="fas fa-brain"></i> my thoughts:</p>
                            <ul>
                                <li className='lineItem'>{this.props.thoughts.went_wrong}</li>
                                <li className='lineItem'>{this.props.thoughts.why_wrong}</li>
                                <li className='lineItem'>{this.props.thoughts.what_doing}</li>
                                <li className='lineItem'>{this.props.thoughts.what_learn}</li>
                            </ul>
                        </div>
                        <div className='boxText'>
                            <p className='boxTextTitle'><i className="fas fa-paper-plane"></i> my plan:</p>
                            <ul>
                                <li className='lineItem' onClick={e=>this.setState({plan_one_check: !this.state.plan_one_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.planone}</p>
                                    {this.state.plan_one_check === null || this.state.plan_one_check === false ? <div className='box'></div> :<div className='boxChecked'></div>}
                                </li>
                                <li className='lineItem' onClick={e=>this.setState({plan_two_check: !this.state.plan_two_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.plantwo}</p>
                                    {this.state.plan_two_check === null || this.state.plan_two_check === false ? <div className='box'></div> :<div className='boxChecked'></div>}
                                </li>
                                <li className='lineItem' onClick={e=>this.setState({plan_three_check: !this.state.plan_three_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.planthree}</p>
                                    {this.state.plan_three_check === null || this.state.plan_three_check === false ? <div className='box'></div> :<div className='boxChecked'></div>}
                                </li>
                                <li className='lineItem' onClick={e=>this.setState({plan_four_check: !this.state.plan_four_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.planfour}</p>
                                    {this.state.plan_four_check === null || this.state.plan_four_check === false ? <div className='box'></div> :<div className='boxChecked'></div>}
                                </li>
                                <li 
                                    className='lineItem' 
                                    onClick={e=> this.setState({plan_five_check: !this.state.plan_five_check}, () => {this.handleBoxCheck()})}>
                                    <p className='plainText'>{this.props.planfive}</p>
                                    {this.state.plan_five_check === null || this.state.plan_five_check === false ? <div className='box'></div> :<div className='boxChecked'></div>} 
                                </li>
                            </ul>
                        </div>
                        <div className='boxText'>
                            <p className='boxTextTitle'><i className="far fa-comments"></i> comments</p>
                            
                            {this.state.comment.length === 0 ? <p><i className="fas fa-comment-slash"></i> no comments at this time</p> : this.state.comment.map((comments, index) => <p className='commentText' key={index}><i className="far fa-comment"></i> {comments.comment}</p>)}
                        </div>   
                    </div> 
                    : 
                    <div>
                        <div className='boxTitle'>
                            <button className='openButton' onClick={() => this.handleClick()}><p className='openIcon'><i className="fas fa-bars"></i></p></button>
                            <h2 className='collapsedTitle'>{this.props.nickname}</h2>
                            <div className='dataContainerMistake'>
                                <p><i className="far fa-calendar-check"></i> {this.props.date.slice(0, 10)}</p>
                                {this.props.shared === true ? <p className='shareIcon'><i className="fas fa-globe-americas"></i></p> : <p className='shareIcon'><i className="fas fa-folder-minus"></i></p>}
                            </div>
                        </div>
                    </div> 
                }
            </div>
        )
    }
}

export default withRouter(YourMistake);