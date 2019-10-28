import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import Nav from '../Nav/Nav';

//add css webkits

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <div className='landingContainer'>
                    <header>
                        <h1 className='title'><div className='logo'></div>reframe</h1>
                        <p className='tagLine'>reframe your mistakes</p>
                    </header>
                    <main>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/explore'>
                                <button className='linkButton'>explore</button>
                        </Link>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/login'>
                                <button className='linkButton'>login</button>
                        </Link>
                        <Link
                            
                            style={{ textDecoration: 'none' }} 
                            to='/register'>
                                <p className='registerLink'>register</p>
                        </Link>
                    </main>
                </div>
            </div>
        )
    }
}