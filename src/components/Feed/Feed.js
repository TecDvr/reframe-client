import React from 'react';
import MistakeFeed from '../MistakeFeed/MistakeFeed';
import Nav from '../Nav/Nav';
import config from '../../config';

export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mistake: []
        }
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/mistake`, {
            method: 'GET'
          })
          .then(res => res.json())
          .then(resJSON => {
            this.setState({
              mistake: resJSON
            })
          })
    }
    
    render() {
        return (
            <div>
                <Nav />
                <div>
                    <header>
                        <h1>Mistakes Feed</h1>
                        <p>tell the world what you did and be free</p>
                    </header>
                    <main>
                        {this.state.mistake.sort((a, b) => b.id - a.id).map((mistake, index) => 
                            <MistakeFeed 
                                key={`mistake-${index}`}
                                date={mistake.posting_date}
                                mistakemade={mistake.mistake}
                                id={mistake.id}
                            />
                        )}
                    </main>
                </div>
            </div>
           
        )
    }
}