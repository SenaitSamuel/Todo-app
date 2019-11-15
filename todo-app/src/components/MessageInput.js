import React, { Component } from 'react'

export default class MessageInput extends Component {
    render() {
        const  { message, handlechange,handleSubmit,editedMessage } = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 col-md-6 mx-auto">
                    <div className="card card-body my-3">
                 <form onSubmit={handleSubmit}>
                     <div className="input-group">
                      <div className="input-group-prepend">
                         <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book"/>
                         </div>
                         </div>
                         <input placeholder="add a todo list"
                          type="text" value={message}
                           onChange={handlechange}/>
                      </div>
                      <button type="submit"  className="btn btn-primary btn-block mt-3" > 
                                { editedMessage ? 'edited' : 'send'}
                     </button>
                </form>
             </div>
                    </div>
                </div>
            </div>
           
        )
    }
}
