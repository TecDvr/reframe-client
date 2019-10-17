import React from 'react';
import './MistakeTwo.css';

export default class Mistake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            how_bad: 0,
            mistake_nickname: '',
            mistake: '',
            share: false,
            howBad: 0
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.history.push('/mistakethree');
    }

    render() {
        return (
            <div className='mistakeContainer'>
                <header>
                    <h1>Own Your Mistake...</h1>
                    <p>Don't depend on will power alone</p>
                </header>
                <main>
                    <div className='buttonContainer'>
                        <h3>How bad was it?</h3>
                        <button className='imgButton' onClick={() => this.setState({howBad: 1})}>not that bad</button>
                        <button className='imgButton' onClick={() => this.setState({howBad: 2})}>kinda bad</button>
                        <button className='imgButton' onClick={() => this.setState({howBad: 3})}>pretty bad</button>
                        <button className='imgButton' onClick={() => this.setState({howBad: 4})}>really bad</button>
                        {this.state.howBad > 2 ? <p>That bad huh? Don't worry though, we've got your back</p> : <p>You can still learn a lot from the smallest mistakes</p>}
                    </div>
                    <form className='mistaketwoForm' onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor='mistakeNickname'>Mistake Nickname</label>
                        <input
                            required
                            placeholder='Mistake nickname'
                            type='text'
                            name='mistakeNickname'
                            id='mistakeNickname'
                            onChange={e => this.setState({mistake_nickname: e.target.value})}>
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
                            onChange={e => this.setState({mistake: e.target.value})}>
                        </textarea>
                        <label htmlFor='share'>Share?</label>
                        <input
                            className='imgButton'
                            type='checkbox'
                            name='share'
                            id='share'
                            value={true}
                            onChange={e => this.setState({share: e.target.value})}>
                        </input>
                        <button className='mistaketwoButton'>next</button>
                    </form>
                </main>
            </div>
        )
    }
}