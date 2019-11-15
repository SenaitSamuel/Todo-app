import React, { Component } from 'react'
import Messages from './Messages'

export default class MessageList extends Component {
    render() {
        const { messages , handleDelete, handleEdit } = this.props
        return (
            <div className="container">
                <div className="row">
                <div className="col-8 col-md-18 mx-auto">
                <div className="card card-body my-3">
                <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">
                  Todo List
                </h3>
                { messages.map((item,id) =>{
                   return  <Messages
                    key= {id} 
                    message= {item.message} 
                    handleDelete={()=> handleDelete(item.id)}
                    handleEdit={()=> handleEdit(item.id)}
                    />                   
               })}
               
            </ul>
                     </div>
                </div>

                </div>

            </div>    
            
        )
    }
}
