import React from "react";
import "./Clock.css";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      dayOfWeek: new Date().getDay(),
      dayOfMonth: new Date().getDate(),
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    const now = new Date();
    this.setState({
      year: now.getFullYear(),
      month: now.getMonth(),
      dayOfWeek: now.getDay(),
      dayOfMonth: now.getDate(),
      hour: now.getHours(),
      minute: now.getMinutes(),
      second: now.getSeconds(),
    });
  }

  render() {
    const { year, month, dayOfWeek, dayOfMonth, hour, minute, second } =
      this.state;

    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];

    const days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
    ];

    return (
      <div className="clock-container">
        <div className="clock">
          <div className="year">{year}</div>
          <div className="month">{months[month]}</div>

          <div className="time">
            <div className="day">{days[dayOfWeek]}, {dayOfMonth}</div>
            <div className="hour">
              {hour.toString().padStart(2, "0")}:
              {minute.toString().padStart(2, "0")}:
              {second.toString().padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
