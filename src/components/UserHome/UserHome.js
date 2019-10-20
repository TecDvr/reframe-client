import React from 'react';
import YourMistake from '../YourMistake/YourMistake';
import ReframeContext from '../../context/reframe-context';

let userID = window.localStorage.getItem('userID')

export default class UserHome extends React.Component {
    static contextType = ReframeContext;

    render() {
        return (
            <div>
                <header>
                    <h1>User Home</h1>
                </header>
                <main>
                    <div>
                        <p>Your mistakes are: NOT SO BAD</p>
                        <p>You have made 8 mistakes</p>
                        <p>You have gone 4 days without a mistake</p>
                    </div>
                    <div>
                        {this.context.mistake.filter(mistake => mistake.user_id == userID).map((mistake, index) => 
                            <YourMistake 
                                key={`mistake-${index}`}
                                nickname={mistake.mistake_nickname}
                                date={mistake.posting_date}
                                mistakemade={mistake.mistake}
                                shared={mistake.box_checked}
                                planone={mistake.plan_one}
                                plantwo={mistake.plan_two}
                                planthree={mistake.plan_three}
                                planfour={mistake.plan_four}
                                planfive={mistake.plan_five}
                                thoughts={mistake}
                            />
                        )}
                    </div>
                </main>                
            </div>
        )
    }
}