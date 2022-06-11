import React from 'react';
import './item-add-form.css';

export default class ItemAddForm extends React.Component {
  state = {
    label: '',
  };

  onLabelChange = (err) => {
    this.setState({
      label: err.target.value,
    });
  };

  onSubmit = (err) => {
    err.preventDefault();
    const { onItemAdded } = this.props;
    const { label } = this.state;
    onItemAdded(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          className="form-control"
          type="text"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={label}
        />
        <button type="button" className="btn btn-outline-secondary btn-width" onClick={this.onSubmit}>
          Add Item
        </button>
      </form>
    );
  }
}
