import React from 'react';
import './Plan.css';
import config from '../../config';
import ReframeContext  from '../../context/reframe-context';

export default class Plan extends React.Component {
    static contextType = ReframeContext

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.context.mistakeData);
        fetch(`${config.API_ENDPOINT}/mistake`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `basic ${window.localStorage.getItem('zachs-token')}`
            },
            body: JSON.stringify(this.context.mistakeData)
        })
        .then(res =>
                res.json().then(user => {
                this.props.history.push('/user')
                })   
        )
    }

    render() {
        return (
            <div className='planContainer'>
                <header>
                    <h1>Plan</h1>
                    <p>Being reasonable with your expectaions of your self is half the battle, or more!</p>
                </header>
                <main>
                    <form className='planForm' onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor='planOne'>Plan One</label>
                        <input
                            type='text'
                            required
                            name='planOne'
                            id='planOne'
                            placeholder='planOne'
                            onChange={e => this.context.storeMistakes('plan_one', e.target.value)}>
                        </input>
                        <label htmlFor='planTwo'>Plan Two</label>
                        <input
                            type='text'
                            name='planTwo'
                            id='planTwo'
                            placeholder='planTwo'
                            onChange={e => this.context.storeMistakes('plan_two', e.target.value)}>
                        </input>
                        <label htmlFor='planThree'>Plan Three</label>
                        <input
                            type='text'
                            name='planThree'
                            id='planThree'
                            placeholder='planThreee'
                            onChange={e => this.context.storeMistakes('plan_three', e.target.value)}>
                        </input>
                        <label htmlFor='planFour'>Plan Four</label>
                        <input
                            type='text'
                            name='planFour'
                            id='planFour'
                            placeholder='planFour'
                            onChange={e => this.context.storeMistakes('plan_four', e.target.value)}>
                        </input>
                        <label htmlFor='planFive'>Plan Five</label>
                        <input
                            type='text'
                            name='planFive'
                            id='planFive'
                            placeholder='planFive'
                            onChange={e => this.context.storeMistakes('plan_five', e.target.value)}>
                        </input>
                        <button className='planButton' type='submit'>Submit</button>
                    </form>
                </main>
            </div>
        )
    }
}