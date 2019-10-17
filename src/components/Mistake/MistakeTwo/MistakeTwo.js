import React from 'react';

export default class Mistake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            how_bad: 0,
            mistake_nickname: '',
            mistake: '',
            share: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.history.push('/mistakethree');
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Own Your Mistake...</h1>
                    <p>Don't depend on will power alone</p>
                </header>
                <main>
                    <form className='mistaketwoForm' onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor='howBad'>How bad was it?</label>
                        <input 
                            required
                            type='range' 
                            name='howBad' 
                            id='howBad' 
                            min='0' 
                            max='5'
                            onChange={e => this.setState({how_bad: e.target.value})}>
                        </input>
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
                        <input
                            required
                            placeholder='Todays mistake was...'
                            type='text'
                            name='mistake'
                            id='mistake'
                            onChange={e => this.setState({mistake: e.target.value})}>
                        </input>
                        <label htmlFor='share'>Share?</label>
                        <input
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