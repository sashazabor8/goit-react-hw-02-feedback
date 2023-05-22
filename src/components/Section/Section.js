import React, { Component } from 'react';
import s from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className={s.section}>
        <h1>{title}</h1>
        {children}
      </section>
    );
  }
}

export default Section;
