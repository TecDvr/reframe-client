import React from 'react';
import { Route, Link } from 'react-router-dom';
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
              onClick={() => {
                window.localStorage.removeItem('zachs-token');
                window.localStorage.removeItem('userID');
              }}
              to='/'><p className='reframeLogo'><i className="far fa-image"></i> logout</p>
            </Link>
          </div>
        )
      }
    
      renderLoginLink() {
        return (
          <div className='menuLink'>
            <Route 
              path='/login'
              render={() => <Link
                style={{ textDecoration: 'none' }}
                to='/register'>
                <p className='reframeLogo'><i className="far fa-image"></i> register</p>
              </Link>}
            />
            <Route 
              path='/register'
              render={() => <Link
                style={{ textDecoration: 'none' }}
                to='/login'>
                <p className='reframeLogo'><i className="far fa-image"></i> login</p>
              </Link>}
            />     
          </div>
        )
      }
    
    //not on entire menu for onclick
    render() {
        return (
            <div className='navContainerMain'>
                {this.state.menuOpen === true ? 
                <div className='navContainer'>
                    <div className='menuOption' onClick={() => this.handleMenu()}>
                    <p className='menuLogo'><i className="fas fa-minus"></i></p>
                    </div>
                    <div className='menuOption popOut' onClick={() => this.handleMenu()}>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/user'><p className='menuLogo'><i className="fas fa-home"></i></p></Link>
                    </div>
                    <div className='menuOption popOut' onClick={() => this.handleMenu()}>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/mistaketwo'><p className='menuLogo'><i className="fas fa-plus"></i></p></Link>
                    </div>
                    <div className='menuOption popOut' onClick={() => this.handleMenu()}>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/feed'><p className='menuLogo'><i className="fas fa-globe-americas"></i></p></Link>
                    </div>
                </div>
                : <div className='navContainer'><div className='menuOption main' onClick={() => this.handleMenu()}><p className='menuLogo'><i className="fas fa-bars"></i></p></div></div>}
                {!!window.localStorage.getItem('zachs-token')
                ? this.renderLogoutLink()
                : this.renderLoginLink()}
            </div>
        )
    }
}