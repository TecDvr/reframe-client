import React from 'react';
import './Login.css';

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
        e.preventDefault();
        this.props.history.push('/mistake');
    }
    
    render() { 
        return (
            <div className='loginContainer'>
                <header>
                    <h1>Login Test</h1>
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
                        onChange={e => this.setState({username: e.target.value})}>
                    </input>
                    <label htmlFor='password'>password</label>
                    <input
                        className='loginInput'
                        required
                        name='password'
                        id='password'
                        placeholder='Password'
                        type='password'
                        onChange={e => this.setState({password: e.target.value})}>
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
        )
    }
}