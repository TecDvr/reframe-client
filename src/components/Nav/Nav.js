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
              to='/user'><p className='reframeLogo'>home</p>
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
                to='/'><p>reframe</p></Link>
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
                <div className='menuOption' onClick={() => this.handleMenu()}>menu</div>
                {this.state.menuOpen === true ? 
                <div className='navContainer'>
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
                    <div className='menuOption' onClick={() => this.handleMenu()}>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/feed'><img className='feedLogo' src='https://lh3.googleusercontent.com/llaTjNStubp4EyMndUQMAFrlFHKhIWcefPpSVFG5x-9TssuNVIJ-QpurIfUE1NTCV5fH81gLfYjMZ69cdKbzy64hIsvoXIWHLaLvyaE57-sjxA6YFpeoQCMxyFouyr4IzMe1PXHrMqf0USTaXBVNgqpJPcUG_6hQV3upMP9_GJfhUFJjZJUSSw5W-Eb1dYtlFcLdjtfBQzrwPjlq_NaoUfwWibcpK-_0IJF38tfEproacDy0eOxruDH5uEnMW6t-z_-b4NKw3gXfikAMKCWMiZnIdnCbmhtpK1PQYtE5Zkh7aXIApwk9LvVFITIymxr2m97_c_Vx1OHWg-5u85_N9VA4mn1fKrNNSlsi2GtJqn434W8FirXNXgcreapdi9jo-JKSxv63uuxKviKZKDy7IQuiYaKdlGr0sR8-MQbePOPXEPeRKze-PEzAf_aFnWiIRmPR7d-pGFZD0lqzTipkx8XlBCZYrXSOInd0XOphB-CMm1hdA27zQ-PRM0RxDSoieOfP2bxbakVcYV1EoJPpKkdULAO9mjcp-LKHUBmyu_e0DAsNA0RXM4OoqDHxGZ7B-KSmX2-RqikV6Tsg5pn59W_fpeCaL2JVwabJEaMXRuqnuq8lf4PYDUwrwWANL2C7lCH0LAtOD-VhCKgVdc3OED1SEZIYQO_sVpzfsh01sHHQtNUSp5Dxj4d637T34XwP6wujqE9eNDtNr2pE6ASTw9W-wsAaTdkLvA4LkBOGjza3BZHy=w124-h123-no' alt='feed logo'/></Link>
                    </div>
                </div>
                : null}
                {!!window.localStorage.getItem('zachs-token')
                ? this.renderLogoutLink()
                : this.renderLoginLink()}
            </div>
        )
    }
}