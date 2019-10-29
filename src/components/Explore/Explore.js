import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css'
import Nav from '../Nav/Nav';

export default class Explore extends React.Component {
    render() {
        return (
            <div>
                <Nav />
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
                        <p className='exploreLogoIcon'><i className="far fa-image"></i></p>
                        <p className='exploreLearnText'><i className="fas fa-book-reader"></i> Some of the hardest lessons in our life are learned from our very own mistakes. While some repeat the same mistake again and again, others choose to reframe there mistakes into something they can take away</p>
                        <p className='exploreLearnText'><i className="fas fa-book-reader"></i> Reframe helps users to "reframe" their mistakes by sharing them with the community and guiding you down a path of learning</p>
                    </div>
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