import React from 'react';
import './MistakeTwo.css';
import ReframeContext from '../../../context/reframe-context';
import Nav from '../../Nav/Nav';
import './MistakeTwo.css';

export default class Mistake extends React.Component {
    static contextType = ReframeContext;

    constructor(props) {
        super(props);
        this.state = {
            how_bad: null
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/mistakethree')
    }

    render() {
        return (
            <div>
                <Nav />
                <div className='mistakeTwoContainer'>
                    <header>
                        <h2>Own Your Mistake...</h2>
                    </header>
                    <main>
                        <div className='buttonMistakeTwoContainer'>
                            <h3>How bad was it?</h3>
                            <button 
                                className='imgButton' 
                                onClick={e => this.setState({how_bad: 1}, () => this.context.storeMistakes('how_bad', 1))}><i className="far fa-thumbs-down"></i> not that bad
                            </button>
                            <button 
                                className='imgButton' 
                                onClick={e => this.setState({how_bad: 2}, () => this.context.storeMistakes('how_bad', 2))}><i className="far fa-sad-tear"></i> kinda bad
                            </button>
                            <button 
                                className='imgButton' 
                                onClick={e => this.setState({how_bad: 3}, () => this.context.storeMistakes('how_bad', 3))}><i className="fas fa-poo"></i> pretty bad
                            </button>
                            <button 
                                className='imgButton' 
                                onClick={e => this.setState({how_bad: 4}, () => this.context.storeMistakes('how_bad', 4))}><i className="fas fa-skull-crossbones"></i> really bad
                            </button>
                            {this.state.how_bad === null ? <p className='howBadText'>Big or small, theres always a take away</p> : null}
                            {this.state.how_bad === 1 ? <p className='howBadText'>You can still learn a lot from the smallest mistakes!</p> : null}
                            {this.state.how_bad === 2 ? <p className='howBadText'>This will be any easy fix!</p> : null}
                            {this.state.how_bad === 3 ? <p className='howBadText'>That bad huh? Don't worry, we've got your back!</p> : null}
                            {this.state.how_bad === 4 ? <p className='howBadText'>Trust us, it's not the end of the world!</p> : null}
                        </div>
                        <form className='mistaketwoForm' onSubmit={e => this.handleSubmit(e)}>
                            <label className='mistakeTwoLabel' htmlFor='mistakeNickname'><i className="fas fa-file-signature"></i> Mistake Nickname</label>
                            <input
                                className='mistakeTwoInput'
                                required
                                placeholder='Mistake nickname'
                                type='text'
                                name='mistakeNickname'
                                id='mistakeNickname'
                                onChange={e => this.context.storeMistakes('mistake_nickname', e.target.value)}>
                            </input>
                            <label className='mistakeTwoLabel' htmlFor='mistake'><i className="fas fa-chalkboard-teacher"></i> Your Mistake</label>
                            <textarea
                                className='mistakeTwoInput'
                                rows='20'
                                cols='2'
                                wrap='hard'
                                required
                                placeholder='Todays mistake was...'
                                name='mistake'
                                id='mistake'
                                onChange={e => this.context.storeMistakes('mistake', e.target.value)}>
                            </textarea>
                            <label className='shareContainer' htmlFor='share'><i className="fas fa-globe-americas"></i> Share?
                            <input
                                className='shareCheckbox'
                                type='checkbox'
                                name='share'
                                id='share'
                                value={true}
                                onChange={e => this.context.storeMistakes('box_checked', e.target.value)}>
                            </input>
                            <span className='shareCheckmark'></span>
                            </label>
                            <button className='mistakeTwoButton'>next</button>
                        </form>
                    </main>
                </div>
            </div>
        )
    }
}