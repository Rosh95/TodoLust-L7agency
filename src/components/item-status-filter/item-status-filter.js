import React from 'react';
import PropTypes from 'prop-types';

import './item-status-filter.css';

class ItemStatusFilter extends React.Component {
  buttons = [
    { name: 'all', label: 'ALL' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  render() {
    const { filter, onFilterchange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const filterClass = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button" className={`btn ${filterClass}`} key={name} onClick={() => onFilterchange(name)}>
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
ItemStatusFilter.defaultProps = {
  filter: 'all',
};
ItemStatusFilter.propTypes = {
  filter: PropTypes.string,
};
export default ItemStatusFilter;
