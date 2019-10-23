import React from 'react';
import './MistakeTwo.css';
import ReframeContext from '../../../context/reframe-context';
import Nav from '../../Nav/Nav';

export default class Mistake extends React.Component {
    static contextType = ReframeContext;

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
                            <button className='imgButton' onClick={e => this.context.storeMistakes('how_bad', 1)}>not that bad</button>
                            <button className='imgButton' onClick={e => this.context.storeMistakes('how_bad', 2)}>kinda bad</button>
                            <button className='imgButton' onClick={e => this.context.storeMistakes('how_bad', 3)}>pretty bad</button>
                            <button className='imgButton' onClick={e => this.context.storeMistakes('how_bad', 4)}>really bad</button>
                            {this.context.how_Bad > 2 ? <p>That bad huh? Don't worry though, we've got your back</p> : <p>You can still learn a lot from the smallest mistakes</p>}
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