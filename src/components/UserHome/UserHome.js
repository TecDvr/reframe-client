import React from 'react';
import YourMistake from '../YourMistake/YourMistake';
import ReframeContext from '../../context/reframe-context';

export default class UserHome extends React.Component {
    static contextType = ReframeContext;
   
    render() {
        return (
            <div>
                <header>
                    <h1>User Home</h1>
                </header>

                <div>
                    {this.context.mistake.dummyMistakes.filter(mistake => mistake.user_id === 14).map((mistake, index) => 
                        <YourMistake 
                            key={`mistake-${index}`}
                            nickname={mistake.mistake_nickname}
                            date={mistake.posting_date}
                            mistakemade={mistake.mistake}
                            shared={mistake.box_checked}
                        />
                    )}
                </div>
            </div>
        )
    }
}