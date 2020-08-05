import React, { Component } from 'react'
import ListItem from './ListItem'

class TodoList extends Component {
    render() {
        return (
            <ul className="list-group my-5">
                <h1 className="text-center">Todo List</h1>
                {this.props.items.map(item => {
                    return (
                        <ListItem key={item.id} title={item.item} handleDelete={() => this.props.handleDelete(item.id)} handleEdit={() => this.props.handleEdit(item.id)} />
                    )
                })}
                {(this.props.items.length !== 0) ? <button type="button" className="btn btn-danger btn-block mt-5" onClick={this.props.clearList}>Clear List</button> : null}
                
            </ul>
        )
    }
}

export default TodoList
