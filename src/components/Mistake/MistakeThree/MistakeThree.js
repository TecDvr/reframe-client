import React from 'react';
import './MistakeThree.css'
import ReframeContext from '../../../context/reframe-context';
import Nav from '../../Nav/Nav';
import './MistakeThree.css';

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
                <div className='mistakeThreeContainer'>
                    <header>
                        <h2>time to reflect...</h2>
                        <p className='mistakeThreeTag'>Seeing your response on paper helps you think more logically</p>
                    </header>
                    <main>
                        <form className='mistakethreeForm' onSubmit={e => this.handleSubmit(e)}>
                            <label className='mistakeThreeLabel' htmlFor='whatWrong'><i className="far fa-clipboard"></i> What went wrong?</label>
                            <input
                                className='mistakeThreeInput'
                                type='text'
                                required
                                name='whatWrong'
                                id='whatWrong'
                                placeholder='What went wrong'
                                onChange={e => this.context.storeMistakes('went_wrong', e.target.value)}>
                            </input>
                            <label className='mistakeThreeLabel' htmlFor='whyWrong'><i className="far fa-clipboard"></i> Why did it go wrong</label>
                            <input
                                className='mistakeThreeInput'
                                type='text'
                                required
                                name='whyWrong'
                                id='whyWrong'
                                placeholder='Why did it go wrong?'
                                onChange={e => this.context.storeMistakes('why_wrong', e.target.value)}>
                            </input>
                            <label className='mistakeThreeLabel' htmlFor='whatTrying'><i className="far fa-clipboard"></i> What were you trying to do?</label>
                            <input
                                className='mistakeThreeInput'
                                type='text'
                                required
                                name='whatTrying'
                                id='whatTrying'
                                placeholder='What were you trying to do?'
                                onChange={e => this.context.storeMistakes('what_doing', e.target.value)}>
                            </input>
                            <label className='mistakeThreeLabel' htmlFor='whatLearn'><i className="far fa-clipboard"></i> What did you learn?</label>
                            <input
                                className='mistakeThreeInput'
                                type='text'
                                required
                                name='whatLearn'
                                id='whatLearn'
                                placeholder='What did you learn?'
                                onChange={e => this.context.storeMistakes('what_learn', e.target.value)}>
                            </input>
                            <button className='mistakeThreeButton' type='submit'>next</button>
                        </form>
                    </main>
                </div>
            </div>
        )
    }
}