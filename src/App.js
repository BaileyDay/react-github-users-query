import React, { Component } from 'react';
import './App.css';
import UserCardList from './components/UserCardList'

class App extends Component {
  state = {
    UserName: "",
    Users: []
  };

  handleChange = event => {
    this.setState({
      UserName: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const previousInput = this.state.UserName;
    fetch(`https://api.github.com/search/users?q=${this.state.UserName}`)

    this.setState({
      UserName: "",
      Users: previousInput
    });
  };


  render() {
    console.log('This Username is' + this.state.Users)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Github Username
            <input
              type="text"
              value={this.state.UserName}
              placeholder="Enter Username"
              onChange={this.handleChange} />
          </label>
          <button type="submit" value="Submit">Submit</button>
        </form>
        <UserCardList users={this.state.Users} />
      </div>
    )

  }

}

export default App;
