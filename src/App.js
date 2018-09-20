import React, { Component } from "react";
import "./App.css";
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleUsername = this.handleUsername.bind(this)
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }

  handleUsername(event) {
    this.setState({username: event.target.value})
    }

    handlePW(event){
      this.setState({password: event.target.value})
  };

  login(){
    // alert('login button')
    //create user object w/ username & Password.
    
    const user = {
      username: this.state.username,
      password: this.state.password
    };
  
    //Axios post that object to the server
    axios.post('/api/login',user)
         .then(res => {
           console.log(res.data)
         });


    // axios.get('/api/health-check')
    //      .then(res=> {
    //        console.log(res) 
    //      });
  };
  
  register(){
    // alert('register button')
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    // console.log(user);
  };

  render() {
    return <div className="App"> 
    <h3> login app </h3> 
    <div className="input-container">
      <label>username</label>
      <input type="text" placeholder="username" onChange={this.handleUsername}/>
      {/* This can be done with an arrow function too */}
    </div>
    <div className="input-container">
      <label>password</label>
      <input type="password" placeholder="password" onChange={(event) => this.handlePW(event)}/>
    </div>
    <div className="button-container">
      <button onClick={this.login}> login </button> <button onClick={this.register}> register </button>
    </div>
    </div>;
  }
}

export default App;
