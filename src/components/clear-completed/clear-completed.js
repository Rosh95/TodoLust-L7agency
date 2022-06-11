import React from 'react';

import './clear-completed.css';

export default class ClearCompleted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onDeletedDoneItems } = this.props;
    return (
      <button type="button" className="btn btn-outline-secondary clear-btn" onClick={() => onDeletedDoneItems()}>
        Clear Completed
      </button>
    );
  }
}
