/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './todo-list-item.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class TodoListItem extends React.Component {
  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }

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
