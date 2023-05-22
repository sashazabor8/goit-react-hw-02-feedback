import React, { Component } from 'react';
import Container from './Container';
import Statistics from 'components/Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const { value } = e.currentTarget;
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback() {
    // const { good, neutral, bad } = this.state;

    // return good + neutral + bad;

    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    let percentage = 0;
    if (total > 0) {
      percentage = Math.round((this.state.good / total) * 100);
    }
    return percentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
