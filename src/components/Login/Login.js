import React from 'react';
import './Login.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: null
        }
    }
    
    render() {
        return (
            <div className='loginContainer'>
                <header>
                    <h1>Login Test</h1>
                </header>
            </div>
        )
    }
}