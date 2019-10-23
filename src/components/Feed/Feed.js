import React from 'react';
import MistakeFeed from '../MistakeFeed/MistakeFeed';
import ReframeContext from '../../context/reframe-context';

export default class Feed extends React.Component {
    static contextType = ReframeContext;
    
    render() {
        return (
            <div>
                <header>
                    <h1>Mistakes Feed</h1>
                    <p>tell the world what you did and be free</p>
                </header>
                <main>
                    {this.context.mistake.map((mistake, index) => 
                        <MistakeFeed 
                            key={`mistake-${index}`}
                            date={mistake.posting_date}
                            mistakemade={mistake.mistake}
                        />
                    )}
                </main>
            </div>
        )
    }
}