import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import './App.styled.css';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
    total: 0,
  };

  countTotalFeedback = evt => {
    this.setState(prev => {
      return {
        [evt]: prev[evt] + 1,
      };
    });
    this.setState(state => {
      return {
        total: state.total + 1,
      };
    });
  };

  CountPositiveFeedbackPercentage = () => {
    return Math.round((this.state.Good / this.state.total) * 100);
  };
  render() {
    const { Good, Neutral, Bad, total } = this.state;
    const btn = ['Good', 'Neutral', 'Bad'];
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h3>Pleace leave feedback</h3>
        <FeedbackOptions
          options={btn}
          onLeaveFeedback={this.countTotalFeedback}
        />
        <h3 className='statistic'>Statistics</h3>
        <div>
          {this.state.total ? (
            <Section
              Good={Good}
              Bad={Bad}
              Neutral={Neutral}
              Total={total}
              positivePercentage={this.CountPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification mes={'No feedback given'} />
          )}
        </div>
      </div>
    );
  }
}

export default App;


