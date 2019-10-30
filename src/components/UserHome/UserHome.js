import React from 'react';
import YourMistake from '../YourMistake/YourMistake';
import Nav from '../Nav/Nav';
import './UserHome.css';
import ReframeContext from '../../context/reframe-context';

export default class UserHome extends React.Component {
    static contextType = ReframeContext;
    constructor(props) {
        super(props);
        this.state = {
            sort: (a, b) => b.id - a.id
        }
    }

    averageBad() {
        const howBadArr = this.context.mistake.filter(mistake =>
        // eslint-disable-next-line
        mistake.user_id == window.localStorage.getItem('userID')).map(bad => bad.how_bad);
        let averageMistake = howBadArr.reduce((a,b) => a + b / howBadArr.length, 0 );
        return (
            averageMistake === 1 
                ? <div>
                    <p className='averageBadIcon'><i className="far fa-thumbs-down"></i></p>
                    <p className='averageBadText'>not that bad</p>
                </div>
                : averageMistake > 1 && averageMistake <= 2.4 
                    ? <div>
                        <p className='averageBadIcon'><i className="far fa-sad-tear"></i></p>
                        <p className='averageBadText'>kinda bad</p>
                    </div>
                    : averageMistake > 2.4 && averageMistake <= 3.4
                        ? <div>
                            <p className='averageBadIcon'><i className="fas fa-poo"></i></p>
                            <p className='averageBadText'>pretty bad</p>
                        </div>
                        : averageMistake > 3.4
                            ? <div>
                                <p className='averageBadIcon'><i className="fas fa-skull-crossbones"></i></p>
                                <p>really bad</p>
                            </div>
                            : <p>Add some mistakes!</p>
                        
                        
                        
        )
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
                <div className='userHomeContainer'>
                    <div className='headContainer'>
                        <header>
                            <h1 className='mainTitle'>mistakes</h1>
                            <p className='mainCatch'>mis·take</p>
                            <p className='mainCatch'>/məˈstāk/</p>
                            <p className='reframeMistakes'>You have  
                                <span className='mistakeNumber'>{this.context.mistake.filter(mistake =>
                                // eslint-disable-next-line
                                mistake.user_id == window.localStorage.getItem('userID')).length}
                                </span> 
                             mistakes to reframe</p>
                        </header>
                        <div className='averageContainer'>
                            <p>On average, your mistakes are:</p>
                            {this.averageBad()}
                        </div>
                    </div>
                    <div className='mistakeMap'>
                        <div className='sortContainer'>
                            <p className='sortBy'><i className="fas fa-sync-alt"></i> sort by:</p>
                            <button className='sortButton' onClick={() => this.dateSort()}>date</button>
                            <button className='sortButton' onClick={() => this.howBadSort()}>how bad</button>
                        </div>                            
                        {this.context.mistake.filter(mistake =>
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
                </div>
            </div>
        )
    }
}