import React from 'react';
import './MistakeThree.css'
import ReframeContext from '../../../context/reframe-context';
import Nav from '../../Nav/Nav';

export default class Mistake extends React.Component {
    static contextType = ReframeContext;
 
    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/plan');
    }

    render() {
        return (
            <div>
                <Nav />
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
                                onChange={e => this.context.storeMistakes('went_wrong', e.target.value)}>
                            </input>
                            <label htmlFor='whyWrong'>Why did it go wrong</label>
                            <input
                                type='text'
                                required
                                name='whyWrong'
                                id='whyWrong'
                                placeholder='Why did it go wrong?'
                                onChange={e => this.context.storeMistakes('why_wrong', e.target.value)}>
                            </input>
                            <label htmlFor='whatTrying'>What were you trying to do?</label>
                            <input
                                type='text'
                                required
                                name='whatTrying'
                                id='whatTrying'
                                placeholder='What were you trying to do?'
                                onChange={e => this.context.storeMistakes('what_doing', e.target.value)}>
                            </input>
                            <label htmlFor='whatLearn'>What did you learn?</label>
                            <input
                                type='text'
                                required
                                name='whatLearn'
                                id='whatLearn'
                                placeholder='What did you learn?'
                                onChange={e => this.context.storeMistakes('what_learn', e.target.value)}>
                            </input>
                            <button className='mistakethreeButton' type='submit'>next</button>
                        </form>
                    </main>
                </div>
            </div>
        )
    }
}