import React from 'react';
import './Register.css';
import config from '../../config';
import Nav from '../Nav/Nav';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user_password: '',
            verifyPassword: '',
            email: '',
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch(`${config.API_ENDPOINT}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => 
            res.json().then(user => {
                this.props.history.push('/user')
                console.log(this.state)
            })
        )
    }



    handleVerifyPassword() {
        if (this.state.password === this.state.verifyPassword) {
            this.props.history.push('/user');
        } else {
            this.setState({
                error: true
            })
        }   
    }

    render() {
        return (
            <div>
                <Nav />
                <div className='registerContainer'>
                    <header>
                        <h1>Register</h1>
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
                            onChange={e => this.setState({username: e.target.value.trim()})}>
                        </input>
                        {this.state.password === this.state.verifyPassword ? <label htmlFor='password'>PASSWORD</label> : <label htmlFor='password'>password</label>}
                        <input
                            className='registerInput'
                            required
                            name='password'
                            id='password'
                            placeholder='Password'
                            type='password'
                            onChange={e => this.setState({user_password: e.target.value.trim()})}>
                        </input>
                        {this.state.password === this.state.verifyPassword ? <label htmlFor='verifyPassword'>VERIFY PASSWORD</label> : <label htmlFor='verifyPassword'>verify password</label>}
                        <input
                            className='registerInput'
                            required
                            name='verifyPassword'
                            id='verifyPassword'
                            placeholder='Verify Password'
                            type='password'
                            onChange={e => this.setState({verifyPassword: e.target.value.trim()})}>
                        </input>
                        {this.state.error === true ? <p>Passwords do NOT match!</p> : null}
                        <label htmlFor='email'>email</label>
                        <input
                            className='registerInput'
                            name='email'
                            id='email'
                            placeholder='Email'
                            type='email'
                            onChange={e => this.setState({email: e.target.value.trim()})}>
                        </input>
                        <button 
                            className='registerButton' 
                            type='submit'
                        >submit</button>  
                    </form>
                </div>
            </div>
        )
    }
}       