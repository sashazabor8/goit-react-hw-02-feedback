import React, { Component } from 'react';
import s from './Notification.module.css';

class Notification extends Component {
  render() {
    const { message } = this.props;

    return <p>{message}</p>;
  }
}
export default Notification;
