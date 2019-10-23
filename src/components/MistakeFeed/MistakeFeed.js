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
            like: false,
            dislike: false,
            mistake_id: 0
        }
    }

    handleLike(e) {
        e.preventDefault();
        this.setState({
            like: true
        })
    }

    handleDislike(e) {
        e.preventDefault();
        this.setState({
            dislike: true
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let mistake_id = window.localStorage.getItem('mistake_id');
        fetch(`${config.API_ENDPOINT}/mistake/${mistake_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `basic ${window.localStorage.getItem('zachs-token')}`
            },
            body: JSON.stringify(this.state)
        })
        .then(res =>
                res.json().then(user => {
                this.props.history.push('/user')
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
                    <div className='boxLike'>
                        <button className='likeButton' onClick={(e) => this.handleLike(e)}>Like</button>
                        <button className='dislikeButton' onClick={(e) => this.handleDislike(e)}>Dislike</button>
                    </div>
                    <form>
                        <label htmlFor='boxComment'>comment</label>
                        <input
                            className='boxComment'
                            type='test'
                            name='boxComment'
                            id='boxComment'
                            placeholder='comment...'
                            onChange={e => this.setState({comment: e.target.value})}>
                        </input>
                        <button className='boxCommentButton' type='submit'>submit</button>
                    </form> 
                </div>
        )
    }
}