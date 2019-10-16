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

    render() {
        return (
            <div className='mistakeBox'>
                <div className='boxTitle'>
                    <h2>Mistake Name</h2>
                    <p>10/31/2019</p>
                </div>
                <div className='boxText'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='boxLike'>
                    <button>Like</button>
                    <button>Dislike</button>
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