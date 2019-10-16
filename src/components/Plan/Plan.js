import React from 'react';

export default class Plan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plan_one: '',
            plan_two: null,
            plan_three: null,
            plan_four: null,
            plan_five: null
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.history.push('/user');
    }

    render() {
        return (
            <div>
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
                            onChange={e => this.setState({plan_one: e.target.value})}>
                        </input>
                        <label htmlFor='planTwo'>Plan Two</label>
                        <input
                            type='text'
                            name='planTwo'
                            id='planTwo'
                            placeholder='planTwo'
                            onChange={e => this.setState({plan_two: e.target.value})}>
                        </input>
                        <label htmlFor='planThree'>Plan Three</label>
                        <input
                            type='text'
                            name='planThree'
                            id='planThree'
                            placeholder='planThreee'
                            onChange={e => this.setState({plan_three: e.target.value})}>
                        </input>
                        <label htmlFor='planFour'>Plan Four</label>
                        <input
                            type='text'
                            name='planFour'
                            id='planFour'
                            placeholder='planFour'
                            onChange={e => this.setState({plan_four: e.target.value})}>
                        </input>
                        <label htmlFor='planFive'>Plan Five</label>
                        <input
                            type='text'
                            name='planFive'
                            id='planFive'
                            placeholder='planFive'
                            onChange={e => this.setState({plan_five: e.target.value})}>
                        </input>
                        <button className='planButton' type='submit'>Submit</button>
                    </form>
                </main>
            </div>
        )
    }
}