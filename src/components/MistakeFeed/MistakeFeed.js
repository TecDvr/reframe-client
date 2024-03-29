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
                res.json()
        )
    }

    render() {
        return (
                <div className='mistakeBox'>
                    <div className='boxTextFeed'>
                        <p>{this.props.mistakemade}</p>
                    </div>
                    <div className='boxTitleFeed'>
                        <p><i className="far fa-calendar-check"></i> {this.props.date.slice(0, 10)}</p>
                        {this.props.bad === 1 ? <p className='mistakeWasBadInsert'><i className="far fa-thumbs-down"></i> Not that bad</p> : this.props.bad === 2 ? <p className='mistakeWasBadInsert'><i className="far fa-sad-tear"></i> Kinda bad</p> : this.props.bad === 3 ? <p className='mistakeWasBadInsert'><i className="fas fa-poo"></i> Pretty bad</p> : <p className='mistakeWasBadInsert'><i className="fas fa-skull-crossbones"></i> Really bad</p>}
                    </div>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <label className='commentLabel' htmlFor='boxComment'><i className="far fa-comments"></i> comment</label>
                        <div className='inputFeed'>
                            <input
                            className='boxComment'
                            type='test'
                            name='boxComment'
                            id='boxComment'
                            placeholder='comment...'
                            onChange={e => this.handleChange(e)}>
                            </input>
                            <button className='boxCommentButton' type='submit'>submit</button>
                        </div>
                    </form> 
                </div>
        )
    }
}