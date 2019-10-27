import React from 'react';
import './MistakeTwo.css';
import ReframeContext from '../../../context/reframe-context';
import Nav from '../../Nav/Nav';

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
                <div className='mistakeContainer'>
                    <header>
                        <h1>Own Your Mistake...</h1>
                        <p>Don't depend on will power alone</p>
                    </header>
                    <main>
                        <div className='buttonContainer'>
                            <h3>How bad was it?</h3>
                            <button 
                                className='imgButton' 
                                onClick={e => this.setState({how_bad: 1}, () => this.context.storeMistakes('how_bad', 1))}>not that bad
                            </button>
                            <button 
                                className='imgButton' 
                                onClick={e => this.setState({how_bad: 2}, () => this.context.storeMistakes('how_bad', 2))}>kinda bad
                            </button>
                            <button 
                                className='imgButton' 
                                onClick={e => this.setState({how_bad: 3}, () => this.context.storeMistakes('how_bad', 3))}>pretty bad
                            </button>
                            <button 
                                className='imgButton' 
                                onClick={e => this.setState({how_bad: 4}, () => this.context.storeMistakes('how_bad', 4))}>really bad
                            </button>
                            {this.state.how_bad === null ? <p>Big or small, theres always a take away</p> : null}
                            {this.state.how_bad === 1 ? <p>You can still learn a lot from the smallest mistakes!</p> : null}
                            {this.state.how_bad === 2 ? <p>This will be any easy fix!</p> : null}
                            {this.state.how_bad === 3 ? <p>That bad huh? Don't worry, we've got your back!</p> : null}
                            {this.state.how_bad === 4 ? <p>Trust us, it's not the end of the world!</p> : null}
                        </div>
                        <form className='mistaketwoForm' onSubmit={e => this.handleSubmit(e)}>
                            <label htmlFor='mistakeNickname'>Mistake Nickname</label>
                            <input
                                required
                                placeholder='Mistake nickname'
                                type='text'
                                name='mistakeNickname'
                                id='mistakeNickname'
                                onChange={e => this.context.storeMistakes('mistake_nickname', e.target.value)}>
                            </input>
                            <label htmlFor='mistake'>Your Mistake</label>
                            <textarea
                                rows='20'
                                cols='2'
                                wrap='hard'
                                required
                                placeholder='Todays mistake was...'
                                name='mistake'
                                id='mistake'
                                onChange={e => this.context.storeMistakes('mistake', e.target.value)}>
                            </textarea>
                            <label htmlFor='share'>Share?</label>
                            <input
                                className='imgButton'
                                type='checkbox'
                                name='share'
                                id='share'
                                value={true}
                                onChange={e => this.context.storeMistakes('box_checked', e.target.value)}>
                            </input>
                            <button className='mistaketwoButton'>next</button>
                        </form>
                    </main>
                </div>
            </div>
        )
    }
}