/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './todo-list-item.css';
import PropTypes from 'prop-types';
import secondsToTime from '../secondsToTime/secondsToTime';

class TodoListItem extends React.Component {
  state = {
    // eslint-disable-next-line id-length
    time: { m: 0, s: 0 },
    seconds: 0,
  };

  componentDidMount() {
    this.timer = 0;
  }

  startTimer = () => {
    this.timer = setInterval(this.countUp, 1000);
  };

  pauseTimer = () => {
    clearInterval(this.timer);
  };

  countUp = () => {
    const seconds = this.state.seconds + 1;
    this.setState({
      time: secondsToTime(seconds),
      seconds,
    });
  };

  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }
    const date = formatDistanceToNow(new Date(), { addSuffix: true });

    return (
      <div className={classNames}>
        <div>
          <span
            role="button"
            tabIndex={0}
            className="todo-list-item-label"
            onClick={onToggleDone}
            onKeyDown={onToggleDone}
          >
            {label}
          </span>
          <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onToggleImportant}>
            <i className="bi bi-exclamation-square" />
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>
            <i className="bi bi-trash" />
          </button>
        </div>
        <div className="time-container">
          <div>
            <button type="button" className="float-none icon icon-play" onClick={this.startTimer}>
              {' '}
            </button>

            <button type="button" className="float-none icon icon-pause" onClick={this.pauseTimer}>
              {' '}
            </button>
            <span className="timer-time">
              m: {this.state.time.m} s: {this.state.time.s}
            </span>
          </div>
          <span className="date-style">Generated {date}</span>
        </div>
      </div>
    );
  }
}
TodoListItem.defaultProps = {
  label: 'label name',
  done: false,
  onDeleted: () => [],
  onToggleImportant: () => [],
  onToggleDone: () => [],
};
TodoListItem.propTypes = {
  label: PropTypes.string,
  done: PropTypes.bool,
  onDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func,
};
export default TodoListItem;
