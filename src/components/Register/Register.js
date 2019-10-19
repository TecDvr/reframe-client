import React from 'react';
import './Register.css';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user_password: '',
            verifyPassword: '',
            email: '',
            error: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.handleVerifyPassword();
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
                        onChange={e => this.setState({username: e.target.value})}>
                    </input>
                    {this.state.password === this.state.verifyPassword ? <label htmlFor='password'>PASSWORD</label> : <label htmlFor='password'>password</label>}
                    <input
                        className='registerInput'
                        required
                        name='password'
                        id='password'
                        placeholder='Password'
                        type='password'
                        onChange={e => this.setState({password: e.target.value})}>
                    </input>
                    {this.state.password === this.state.verifyPassword ? <label htmlFor='verifyPassword'>VERIFY PASSWORD</label> : <label htmlFor='verifyPassword'>verify password</label>}
                    <input
                        className='registerInput'
                        required
                        name='verifyPassword'
                        id='verifyPassword'
                        placeholder='Verify Password'
                        type='password'
                        onChange={e => this.setState({verifyPassword: e.target.value})}>
                    </input>
                    {this.state.error === true ? <p>Passwords do NOT match!</p> : null}
                    <label htmlFor='email'>email</label>
                    <input
                        className='registerInput'
                        name='email'
                        id='email'
                        placeholder='Email'
                        type='email'
                        onChange={e => this.setState({email: e.target.value})}>
                    </input>
                    <button 
                        className='registerButton' 
                        type='submit'
                    >submit</button>  
                </form>
            </div>
        )
    }
}       