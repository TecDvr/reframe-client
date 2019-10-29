import React from 'react';
import YourMistake from '../YourMistake/YourMistake';
import Nav from '../Nav/Nav';
import config from '../../config';
import './UserHome.css';

export default class UserHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mistake: [],
            sort: (a, b) => b.id - a.id
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
            <div className='userHomeContainer'>
                <Nav />
                <div>
                    <header>
                        <h1 className='mainTitle'>mistakes</h1>
                        <p className='mainCatch'>mis·take</p>
                        <p className='mainCatch'>/məˈstāk/</p>
                        <p className='reframeMistakes'>You have <span className='mistakeNumber'>{this.state.mistake.length}</span> mistakes to reframe</p>
                    </header>
                    <div className='sortContainer'>
                        <p className='sortBy'>sort by:</p>
                        <button className='sortButton' onClick={() => this.dateSort()}>date</button>
                        <button className='sortButton' onClick={() => this.howBadSort()}>how bad</button>
                    </div>
                    <main>
                        <div className='mistakeMap'>
                            {this.state.mistake.filter(mistake => 
                            // eslint-disable-next-line
                            mistake.user_id == window.localStorage.getItem('userID')).sort(this.state.sort).map((mistake, index) => 
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