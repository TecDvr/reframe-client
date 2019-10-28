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

    renderLogoutLink() {
        return (
          <div className='menuLink'>
            <Link 
              style={{ textDecoration: 'none' }} 
              to='/user'><p className='reframeLogo'><div className='logoNav'></div>reframe</p>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              onClick={() => {
                window.localStorage.removeItem('zachs-token');
                window.localStorage.removeItem('userID');
              }}
              to='/'><p className='reframeLogo'>logout</p>
            </Link>
          </div>
        )
      }
    
      renderLoginLink() {
        return (
          <div className='menuLink'>
            <Link
                className='reframeLogo'
                style={{ textDecoration: 'none' }}
                to='/'><p><div className='logoNav'></div>reframe</p></Link>
            <Link
              style={{ textDecoration: 'none' }}
              to='/login'>
              <p className='reframeLogo'>login</p>
            </Link>
          </div>
        )
      }
    
    //not on entire menu for onclick
    render() {
        return (
            <div className='navContainerMain'>
                {this.state.menuOpen === true ? 
                <div className='navContainer'>
                    <div className='menuOption' onClick={() => this.handleMenu()}></div>
                    <div className='menuOption popOut' onClick={() => this.handleMenu()}>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/user'>h</Link>
                    </div>
                    <div className='menuOption popOut' onClick={() => this.handleMenu()}>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/mistaketwo'>+</Link>
                    </div>
                    <div className='menuOption popOut' onClick={() => this.handleMenu()}>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/feed'>f</Link>
                    </div>
                </div>
                : <div className='navContainer'><div className='menuOption main' onClick={() => this.handleMenu()}></div></div>}
                {!!window.localStorage.getItem('zachs-token')
                ? this.renderLogoutLink()
                : this.renderLoginLink()}
            </div>
        )
    }
}