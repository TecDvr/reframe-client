import React from 'react';
import MistakeFeed from '../MistakeFeed/MistakeFeed';

export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <header>
                    <h1>Mistakes Feed</h1>
                    <p>tell the world what you did</p>
                </header>
                <main>
                    <MistakeFeed />
                </main>
            </div>
        )
    }
}