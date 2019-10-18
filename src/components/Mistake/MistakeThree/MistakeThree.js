import React from 'react';
import './MistakeThree.css'

export default class Mistake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            went_wrong: '',
            why_wrong: '',
            what_doing: '',
            what_learn: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.history.push('/plan');
    }

    render() {
        return (
            <div className='mistakeContainer'>
                <header>
                    <h1>Time to Reflect...</h1>
                    <p>Seeing your response on paper helps you think more logically</p>
                </header>
                <main>
                    <form className='mistakethreeForm' onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor='whatWrong'>What went wrong?</label>
                        <input
                            type='text'
                            required
                            name='whatWrong'
                            id='whatWrong'
                            placeholder='What went wrong'
                            onChange={e => this.setState({went_wrong: e.target.value})}>
                        </input>
                        <label htmlFor='whyWrong'>Why did it go wrong</label>
                        <input
                            type='text'
                            required
                            name='whyWrong'
                            id='whyWrong'
                            placeholder='Why did it go wrong?'
                            onChange={e => this.setState({why_wrong: e.target.value})}>
                        </input>
                        <label htmlFor='whatTrying'>What were you trying to do?</label>
                        <input
                            type='text'
                            required
                            name='whatTrying'
                            id='whatTrying'
                            placeholder='What were you trying to do?'
                            onChange={e => this.setState({what_doing: e.target.value})}>
                        </input>
                        <label htmlFor='whatLearn'>What did you learn?</label>
                        <input
                            type='text'
                            required
                            name='whatLearn'
                            id='whatLearn'
                            placeholder='What did you learn?'
                            onChange={e => this.setState({what_learn: e.target.value})}>
                        </input>
                        <button className='mistakethreeButton' type='submit'>next</button>
                    </form>
                </main>
            </div>
        )
    }
}