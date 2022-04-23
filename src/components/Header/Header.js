import React from 'react';
import Sun from '../../public/icons8-sun.gif';
import Night from '../../public/icons8-night.gif';

class DayAndNight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isNight: Boolean };
  }

  dayOrNight() {
    const hours = new Date().getHours();
    this.setState(state => {
      if (hours >= 18) {
        state.isNight = true;
      } else {
        state.isNight = false;
      }
      return state;
    });
  }

  componentDidMount() {
    this.dayOrNight();
  }

  render() {
    return (
      <span>
        <img
          alt='day-night-icons'
          src={this.state.isNight === true ? Night : Sun}
          width='40px'
        />
      </span>
    );
  }
}

function WeekDay() {
  let weekdayArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let randomWordArray = [
    "Oh my, it's ",
    "Whoop, it's ",
    'Happy ',
    "Seems it's ",
    "Awesome, it's ",
    'Have a nice ',
    'Happy fabulous ',
    'Enjoy your ',
  ];

  let randomWordDay =
    randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
  let todayDay = weekdayArray[new Date().getDay()];

  return (
    <div>
      {randomWordDay + todayDay} <DayAndNight />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h2>
        <WeekDay />
      </h2>
    </div>
  );
}

export default Header;
