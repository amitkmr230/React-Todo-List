import React, {Component} from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items: [],
       uuid: uuidv4(),
       item: '',
       editItem: false
    }
  }  

  handleChange = e => {
    this.setState({item: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.item === "") {
      return false
    }
    const newItem = {
      id: uuidv4(),
      item: this.state.item
    }
    console.log(newItem)
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems, 
      item:'',
      id: uuidv4(),
      editItem:false
    })
  }

  clearList = () => {
    this.setState({
      items:[]
    })
  }

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filteredItems
    })
  }

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items: filteredItems,
      item: selectedItem.item,
      editItem: true
    })
  }
  
  render() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h1 className="text-capitalize text-center">todo input</h1>
          <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
          <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
        </div>
      </div>
    </div>
  );
}
}

export default App;
