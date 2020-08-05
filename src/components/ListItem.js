import React, { Component } from 'react'

class ListItem extends Component {
    render() {
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-1 bg-warning">
                <h4>{this.props.title}</h4>
                <div>
                    <span className="mx-2 text-success" onClick={this.props.handleEdit}><i className="fa fa-pencil" /></span>
                    <span className="mx-2 text-danger" onClick={this.props.handleDelete}><i className="fa fa-trash" /></span>
                </div>
            </li>
        )
    }
}

export default ListItem
