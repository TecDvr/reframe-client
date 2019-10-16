import React from 'react';
import './Register.css';

// build out services 
// config file for fetch url

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
    }

    handleLogin(e) {
        e.preventDefault()
        console.log('Youre logged in')
    }

    render() {
        return (
            <div className='registerContainer'>
                <header>
                    <h1>Register Test</h1>
                </header>
                <form className='registerForm' onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor='username'>username</label>
                    <input
                        className='registerInput'
                        required
                        name='username'
                        id='username'
                        placeholder='Username'
                        type='text'
                        onChange={e => this.setState({username: e.target.value})}>
                    </input>
                    <label htmlFor='password'>password</label>
                    <input
                        className='registerInput'
                        required
                        name='password'
                        id='password'
                        placeholder='Password'
                        type='text'
                        onChange={e => this.setState({password: e.target.value})}>
                    </input>
                    <label htmlFor='email'>email</label>
                    <input
                        className='registerInput'
                        required
                        name='email'
                        id='email'
                        placeholder='Email'
                        type='email'
                        onChange={e => this.setState({email: e.target.value})}>
                    </input>
                    <button 
                        className='registerButton' 
                        type='submit'
                        onClick={e => this.handleLogin(e)}
                    >submit</button>  
                </form>
            </div>
        )
    }
}       