import React from 'react';
import './MistakeFeed.css';

export default class MistakeFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            like: false,
            dislike: false
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

    render() {
        return (
            <div className='mistakeBox'>
                <div className='boxTitle'>
                    <p>{this.props.date}</p>
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