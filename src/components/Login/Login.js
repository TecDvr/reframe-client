import React from 'react';
import './Login.css';
import config from '../../config';
import Nav from '../Nav/Nav';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user_password: '',
            error: null
        }
    }

    handleSubmit(e) {
        this.setState({error: null});
        e.preventDefault();
        window.localStorage.setItem('zachs-token',
            window.btoa(`${this.state.username}:${this.state.user_password}`)
        )
        fetch(`${config.API_ENDPOINT}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
        .then(res =>
            (res.ok) 
                ? res.json().then(user => {
                window.localStorage.setItem('userID', user.id)
                this.props.history.push('/mistake')
            })
            : res.json().then(resJson=>this.setState({error:resJson.error}))
        )   
    }
    
    render() { 
        return (
            <div>
                <Nav />
                <div className='loginContainer'>
                    <header>
                        <h1>login</h1>
                    </header>
                    <form className='loginForm' onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor='username'>username</label>
                        <input 
                            className='loginInput'
                            required
                            name='username'
                            id='username'
                            placeholder='Username'
                            type='text'
                            onChange={e => this.setState({username: e.target.value.trim()})}>
                        </input>
                        <label htmlFor='password'>password</label>
                        <input
                            className='loginInput'
                            required
                            name='password'
                            id='password'
                            placeholder='Password'
                            type='password'
                            onChange={e => this.setState({user_password: e.target.value.trim()})}>
                        </input>
                        {this.state.error ? <p className="error">{this.state.error}</p> : <div className='demo'>
                                <p>DEMO THIS APP</p>
                                <p>username: demoUser</p>
                                <p>password: demoPassword</p>
                            </div>
                        }
                        <button className='loginButton' type='submit'>submit</button>
                    </form>
                </div>
            </div>
            
        )
    }
}