import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends React.Component {
    render() {
        return (
            <div className='landingContainer'>
                <header>
                    <h1>reframe</h1>
                    <p>reframe your mistakes</p>
                </header>
                <body>
                    <Link 
                        style={{ textDecoration: 'none' }} 
                        to='/explore'>
                            <button className='exploreButton'>explore</button>
                    </Link>
                    <Link 
                        style={{ textDecoration: 'none' }} 
                        to='/login'>
                            <button className='loginButton'>login</button>
                    </Link>
                </body>
            </div>
        )
    }
}