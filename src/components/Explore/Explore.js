import React from 'react';
import { Link } from 'react-router-dom';

export default class Explore extends React.Component {
    render() {
        return (
            <div className='exploreContainer'>
                <header>
                    <h1>Explore</h1>
                </header>
                <div>
                    <Link 
                        style={{ textDecoration: 'none' }} 
                        to='/register'>
                            <button className='exploreButton'>register</button>
                    </Link>
                </div>
            </div>
        )
    }
}