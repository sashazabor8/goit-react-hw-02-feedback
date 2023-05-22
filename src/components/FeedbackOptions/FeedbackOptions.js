import s from './FeedbackOptions.module.css';

import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={s.feedbackList}>
        {options.map(option => {
          return (
            <li className={s.feedbackItem} key={option}>
              <button
                type="button"
                value={option}
                className={s[option]}
                onClick={onLeaveFeedback}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default FeedbackOptions;
