import React from 'react';
import './MistakeOne.css'
import Nav from '../../Nav/Nav';

export default class MistakeOne extends React.Component {
    handleYesClick(e) {
        e.preventDefault();
        this.props.history.push('/mistaketwo');
    }

    handleNoClick(e) {
        e.preventDefault();
        this.props.history.push('/user');
    }

    render() {
        return (
            <div>
                <Nav />
                    <div className='mistakeoneContainer'>
                        <h3 className='mistakeoneTitle'>Did you make a mistake today?</h3>
                        <div className='mistakeButtonCluster'>
                            <button
                            className='mistakeButton'
                            type='submit' onClick={(e) => this.handleYesClick(e)}>yes</button>
                            <button 
                            className='mistakeButton'
                            type='submit' onClick={(e) => this.handleNoClick(e)}>no</button>
                        </div>
                </div>
            </div>
        )
    }
}