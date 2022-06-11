import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';
import ItemAddForm from '../item-add-form/item-add-form';
import ClearCompleted from '../clear-completed/clear-completed';

export default class App extends React.Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    filter: 'all',
  };

  deletedItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  onDeletedDoneItems = () => {
    this.setState(({ todoData }) => {
      const newArr = [...todoData].filter((el) => !el.done);
      return {
        todoData: newArr,
      };
    });
  };

  onFilterchange = (filter) => {
    this.setState({ filter });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  togglePropetry = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.togglePropetry(todoData, id, 'done'),
    }));
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.togglePropetry(todoData, id, 'important'),
    }));
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      // eslint-disable-next-line no-plusplus
      id: this.maxId++,
    };
  }

  filter(items, filter) {
    if (filter === 'all') {
      return items;
    }
    if (filter === 'active') {
      return items.filter((item) => !item.done);
    }
    if (filter === 'done') {
      return items.filter((item) => item.done);
    }

    return items;
  }

  render() {
    const { todoData, filter } = this.state;
    const visibleItems = this.filter(todoData, filter);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter filter={filter} onFilterchange={this.onFilterchange} />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deletedItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
        <ClearCompleted onDeletedDoneItems={this.onDeletedDoneItems} />
      </div>
    );
  }
}
