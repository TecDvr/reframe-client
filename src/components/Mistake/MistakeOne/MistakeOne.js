import React from 'react';

export default class MistakeOne extends React.Component {
    handleYesClick(e) {
        e.preventDefault();
        console.log('yes');
        this.props.history.push('/mistaketwo');
    }

    handleNoClick(e) {
        e.preventDefault();
        console.log('no');
        this.props.history.push('/user');
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Mistake</h1>
                </header>
                <main>
                    <h3>Did you make a mistake today?</h3>
                    <div className='mistakeButtonCluster'>
                        <button type='submit' onClick={(e) => this.handleYesClick(e)}>yes</button>
                        <button type='submit' onClick={(e) => this.handleNoClick(e)}>no</button>
                    </div>
                </main>
            </div>
        )
    }
}