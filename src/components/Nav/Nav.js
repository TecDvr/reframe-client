import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    handleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }
    
    //not on entire menu for onclick
    render() {
        return (
            <div className='navContainer'>
                <div className='menuOption' onClick={() => this.handleMenu()}></div>
                {this.state.menuOpen === true ? 
                <div>
                    <div className='menuOption' onClick={() => this.handleMenu()}>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/user'>h</Link>
                    </div>
                    <div className='menuOption' onClick={() => this.handleMenu()}>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/mistaketwo'>+</Link>
                    </div>
                    <div className='menuOption bottom' onClick={() => this.handleMenu()}>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/feed'>f</Link>
                    </div>
                </div>
                : null}
                <div>
                    <Link 
                        style={{ textDecoration: 'none' }}
                        to='/'><p>reframe</p></Link>
                </div>
            </div>
        )
    }
}