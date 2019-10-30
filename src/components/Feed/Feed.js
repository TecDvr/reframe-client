import React from 'react';
import MistakeFeed from '../MistakeFeed/MistakeFeed';
import Nav from '../Nav/Nav';
//import config from '../../config';
import ReframeContext from '../../context/reframe-context';
import './Feed.css';

export default class Feed extends React.Component {
    static contextType = ReframeContext;
    constructor(props) {
        super(props);
        this.state = {
            sort: (a, b) => b.id - a.id
        }
    }

    howBadSort() {
        this.setState({
            sort: (a, b) => b.how_bad - a.how_bad
        })
    }

    dateSort() {
        this.setState({
            sort: (a, b) => b.id - a.id
        })
    }
    
    render() {
        return (
            <div>
                <Nav />
                <div className='feedContainer'>
                    <header>
                        <p>learn from someone else's mistake</p>
                    </header>
                    <main>
                    <div className='sortContainer'>
                        <p className='sortBy'>sort by:</p>
                        <button className='sortButton' onClick={() => this.dateSort()}>date</button>
                        <button className='sortButton' onClick={() => this.howBadSort()}>how bad</button>
                    </div>
                        {this.context.mistake.sort(this.state.sort).map((mistake, index) => 
                            <MistakeFeed 
                                key={`mistake-${index}`}
                                date={mistake.posting_date}
                                mistakemade={mistake.mistake}
                                id={mistake.id}
                                bad={mistake.how_bad}
                            />
                        )}
                    </main>
                </div>
            </div>
           
        )
    }
}