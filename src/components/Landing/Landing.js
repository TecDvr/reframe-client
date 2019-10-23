import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import Nav from '../Nav/Nav';

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className='landingContainer'>
                    <header>
                        <h1>reframe</h1>
                        <p>reframe your mistakes</p>
                    </header>
                    <main>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/explore'>
                                <button className='exploreLinkButton'>explore</button>
                        </Link>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/login'>
                                <button className='loginButton'>login</button>
                        </Link>
                    </main>
                </div>
            </div>
        )
    }
}