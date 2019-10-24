import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css'
import Nav from '../Nav/Nav';

export default class Explore extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className='exploreContainer'>
                    <header>
                        <h1>Explore</h1>
                    </header>
                    <div>
                        <p className='exploreText'>This section explains how to use the app and will be expanded with screen shots and live demos once all styling has been applied</p>
                        <p className='exploreText'>Reframe enables you to "reframe" your daily mistakes</p>
                        <p className='exploreText'>As a user of reframe you...</p>
                        <ul>
                            <li>Register/Login</li>
                            <li>Learn how to use the app in the explore screen</li>
                            <li>Once registered and logged in...</li>
                                <ul>
                                    <li>Click on the menu (top right) and go to live feed (world icon) of all posted mistakes</li>
                                    <li>Click on plus sign to add new mistake</li>
                                    <li>Click on h to go to user home</li>
                                    <li>Click reframe logo at any time to go to user home</li>
                                </ul>
                        </ul> 
                        <p className='exploreText'>When a user decides to add a new mistake they first decide the severity of the mistake, give a nickname to the mistake and explain the mistake in full detail. Users then go through four prompts helping them to see the cause and lead them to a learning point. Once the mistake has been reviewed users are given five prompts to come up with a simple plan to help learn from and hopefully not repeat the mistake.</p>
                        <p className='exploreText'>Users are able to anonymously submit their mistakes to the public feed for community review. The idea behind this is that users will submit funny mistakes and feel no shame in doing so. Hopefully, the community will be able to learn from these mistakes as well and also get a laugh at the daily things we do. Version two will allow users to comment and like all mistakes.</p>
                        <p className='exploreText'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <Link 
                            style={{ textDecoration: 'none' }} 
                            to='/register'>
                                <button className='exploreButton'>register</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}