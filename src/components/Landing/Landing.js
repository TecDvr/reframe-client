import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <div className='landingContainer'>
                    <header>
                        <p className='title'><i className="far fa-image mainIcon"></i>reframe</p>
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