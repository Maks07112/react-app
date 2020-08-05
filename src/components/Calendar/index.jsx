import React from 'react';
import Month from './Month';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const { currentDate } = this.state;
    return (
      <article>
        <section></section>
        <section>
          <Month year={currentDate.getFullYear()} month={currentDate.getMonth()} />
        </section>
      </article>
    );
  }
}

export default Calendar;
