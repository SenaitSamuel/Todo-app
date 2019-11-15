import React, { Component } from 'react'

export default class Messages extends Component {
    render() {
        const {message,handleDelete, handleEdit } = this.props
        return (
            <li className = "list-group-item text-Capitalize d-flex justify-content-between my-2">
                <h6>{message} </h6>
                <div className = "todo-icon">
                <span className = "mx-2 text-success" onClick={handleEdit}>
                    <i className="fas fa-pen"/>
                </span>
                <span className = "mx-2 text-danger" onClick= {handleDelete}>
                    <i className="fas fa-trash"/>
                </span>
                </div>
                
            </li>
        )
    }
}
