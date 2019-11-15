import React, { Component } from 'react'
import '../styles/App.css';
import MessageInput from './MessageInput'
import MessageList from './MessageList'




const uuid = require('uuid/v4');


 class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
        messages: [],
        id:uuid(),
        message:'',
        editedMessage:false,
    }
  }
  
       
handlechange = (e) =>{
  this.setState({
    message: e.target.value
  })
  
}

handleSubmit = (e) =>{
  e.preventDefault ()
  const newMessage = {
    message: this.state.message,
    id: this.state.id,
  }
  this.setState({
    messages:[...this.state.messages,newMessage],
    id:uuid(),
    message:""
  })

}
handleDelete = (id) =>{
  const filteredItems= this.state.messages.filter(item =>
    item.id!==id);
  this.setState({
    messages: filteredItems
  })

}
handleEdit = (id) =>{
  const filteredItems= this.state.messages.filter(item =>
    item.id!==id);

    const selectedMessage = this.state.messages.find(item =>
      item.id ===id);
      console.log(selectedMessage)

  this.setState({
    messages: filteredItems,
    message:selectedMessage.message,
    id:id,
    editedMessage:true
  })
}



  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">
                   Todo App
              </h3>

            </div>
          </div>
          <MessageInput
            message={this.state.message}
            handlechange= {this.handlechange}
            handleSubmit = {this.handleSubmit}
            editedMessage={this.state.editedMessage}
          
          />
        <MessageList
          messages= {this.state.messages}
          handleDelete={this.handleDelete}
          handleEdit = {this.handleEdit}

          />
       
    
        </div>
    )
}
 
}

export default App;
