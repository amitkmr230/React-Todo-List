import React, { Component } from 'react'

class TodoInput extends Component {
    render() {
        return (
            <div className="card card-body my-3"> 
                <form onSubmit={this.props.handleSubmit}>
                    <div className="group-input">
                        <div className="input-group-prepend">
                            <div className={this.props.editItem ? "input-group-text bg-success text-white" : "input-group-text bg-primary text-white"}>
                                <i className="fa fa-book"></i>
                            </div>
                            <input type="text" className="form-control" placeholder="Add a todo item" value={this.props.item} onChange={this.props.handleChange} />
                        </div>                        
                    </div>
                    <button type="submit" className={this.props.editItem ? "btn btn-success btn-block mt-3" : "btn btn-primary btn-block mt-3"}>{this.props.editItem ? "Edit Item" : "Add Item"}</button>
                </form>
            </div>
        )
    }
}

export default TodoInput
