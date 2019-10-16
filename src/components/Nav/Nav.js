import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <div className='navContainer'>
                <Link 
                    style={{ textDecoration: 'none' }} 
                    to='/'> Home </Link>
                <Link 
                    style={{ textDecoration: 'none' }} 
                    to='/user'> UserHome </Link>
                <Link 
                    style={{ textDecoration: 'none' }} 
                    to='/'> Add </Link>
                <Link 
                    style={{ textDecoration: 'none' }} 
                    to='/'> Feed </Link>
            </div>
        )
    }
}