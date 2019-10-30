import React from 'react';
import './Plan.css';
import config from '../../config';
import ReframeContext  from '../../context/reframe-context';
import Nav from '../Nav/Nav';

export default class Plan extends React.Component {
    static contextType = ReframeContext

    handleSubmit(e) {
        e.preventDefault();
        fetch(`${config.API_ENDPOINT}/mistake`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `basic ${window.localStorage.getItem('zachs-token')}`
            },
            body: JSON.stringify(this.context.mistakeData)
        })
        .then(res =>
            res.json().then(mistake => {
                this.context.updateMistake(mistake);
                this.props.history.push('/user');
            })
        )
    }

    render() {
        return (
            <div>
                <Nav />
                <div className='planContainer'>
                    <header>
                        <h1>Plan</h1>
                        <p>Being reasonable with your expectations of your self is half the battle, or more!</p>
                    </header>
                    <main>
                        <form className='planForm' onSubmit={e => this.handleSubmit(e)}>
                            <label className='planLabel' htmlFor='planOne'>Plan One</label>
                            <input
                                className='planInput'
                                type='text'
                                required
                                name='planOne'
                                id='planOne'
                                placeholder='1st step'
                                onChange={e => this.context.storeMistakes('plan_one', e.target.value)}>
                            </input>
                            <label className='planLabel' htmlFor='planTwo'>Plan Two</label>
                            <input
                                className='planInput'
                                type='text'
                                name='planTwo'
                                id='planTwo'
                                placeholder='2nd step'
                                onChange={e => this.context.storeMistakes('plan_two', e.target.value)}>
                            </input>
                            <label className='planLabel' htmlFor='planThree'>Plan Three</label>
                            <input
                                className='planInput'
                                type='text'
                                name='planThree'
                                id='planThree'
                                placeholder='3rd step'
                                onChange={e => this.context.storeMistakes('plan_three', e.target.value)}>
                            </input>
                            <label className='planLabel' htmlFor='planFour'>Plan Four</label>
                            <input
                                className='planInput'
                                type='text'
                                name='planFour'
                                id='planFour'
                                placeholder='4th step'
                                onChange={e => this.context.storeMistakes('plan_four', e.target.value)}>
                            </input>
                            <label className='planLabel' htmlFor='planFive'>Plan Five</label>
                            <input
                                className='planInput'
                                type='text'
                                name='planFive'
                                id='planFive'
                                placeholder='5th step'
                                onChange={e => this.context.storeMistakes('plan_five', e.target.value)}>
                            </input>
                            <button className='planButton' type='submit'>Submit</button>
                        </form>
                    </main>
                </div>
            </div>
        )
    }
}