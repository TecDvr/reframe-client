import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css'

export default class Explore extends React.Component {
    render() {
        return (
            <div className='exploreContainer'>
                <div>
                    <h2 className='exploreTitle'>mis·take</h2>
                    <p className='pronounce'>/məˈstāk/</p>
                    <h3 className='exploreExplainTitle'><i className="far fa-bookmark"></i> noun</h3>
                    <p className='nounText'>an action or judgment that is misguided or wrong.</p>
                    <h3 className='exploreExplainTitle'><i className="far fa-bookmark"></i> verb</h3>
                    <p className='nounText'>be wrong about.</p>
                </div>
                <div className='exploreText'>
                    <p className='exploreLogoIcon'><i className="far fa-image"></i>reframe</p>
                    <p className='exploreLearnText'><i className="fas fa-book-reader"></i> Some of the hardest lessons in our life are learned from our very own mistakes. While some repeat the same mistake again and again, others choose to reframe there mistakes into something they can take away</p>
                    <p className='exploreLearnText'><i className="fas fa-book-reader"></i> The best way to learn from your mistakes is by exploring the cause. Reframe helps you to do just that by pinning down the root of the problem, reframing the mistake with guided steps and formulating a game plan to ensure you're able to learn and not repeat</p>
                    <p className='exploreLearnText'><i className="fas fa-book-reader"></i> So what are you waiting for? We are all human, we all make mistakes... Might as well learn from it!</p>
                </div>
                <div>
                    <Link 
                        style={{ textDecoration: 'none' }} 
                        to='/register'>
                            <button className='exploreButton'>register</button>
                    </Link>
                    <Link 
                        style={{ textDecoration: 'none' }} 
                        to='/login'>
                            <button className='exploreButton'>login</button>
                    </Link>
                </div>
            </div>
        )
    }
}