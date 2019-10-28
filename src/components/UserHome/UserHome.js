import React from 'react';
import YourMistake from '../YourMistake/YourMistake';
import Nav from '../Nav/Nav';
import config from '../../config';
import './UserHome.css';

export default class UserHome extends React.Component {
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
                        <h1>User Home</h1>
                    </header>
                    <main>
                        <div>
                            <h2>mis·take</h2>
                            <p>/məˈstāk/</p>
                            <h3>noun</h3>
                            <p>an action or judgment that is misguided or wrong.</p>
                            <p>"coming here was a mistake"</p>
                            <h3>verb</h3>
                            <p>be wrong about.</p>
                            <p>"because I was inexperienced I mistook the nature of our relationship"</p>
                        </div>
                        <div className='mistakeMap'>
                            {this.state.mistake.filter(mistake => 
                            // eslint-disable-next-line
                            mistake.user_id == window.localStorage.getItem('userID')).sort((a, b) => b.id - a.id).map((mistake, index) => 
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
                                    id={mistake.id}
                                    bad={mistake.how_bad}
                                />
                            )}
                        </div>
                    </main>                
                </div>
            </div>
        )
    }
}