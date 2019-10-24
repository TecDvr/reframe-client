import React from 'react';
import './MistakeFeed.css';
import ReframeContext from '../../context/reframe-context';
import config from '../../config';

export default class MistakeFeed extends React.Component {
    static contextType = ReframeContext;

    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            mistake_id: 0
        }
    }

    handleChange(e) {
        this.setState({
            comment: e.target.value,
            mistake_id: this.props.id
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch(`${config.API_ENDPOINT}/comment/${this.state.mistake_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `basic ${window.localStorage.getItem('zachs-token')}`
            },
            body: JSON.stringify(this.state)
        })
        .then(res =>
                res.json().then(user => {
                console.log(user)
                })   
        )
    }

    render() {
        return (
                <div className='mistakeBox'>
                    <div className='boxTitle'>
                        <p>{this.props.date.slice(0, 10)}</p>
                    </div>
                    <div className='boxText'>
                        <p>{this.props.mistakemade}</p>
                    </div>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <label htmlFor='boxComment'>comment</label>
                        <input
                            className='boxComment'
                            type='test'
                            name='boxComment'
                            id='boxComment'
                            placeholder='comment...'
                            onChange={e => this.handleChange(e)}>
                        </input>
                        <button className='boxCommentButton' type='submit'>submit</button>
                    </form> 
                </div>
        )
    }
}