import React, { Component } from 'react';
import UserCardList from './components/UserCardList';
import './App.css';

class App extends Component {

  state = {
    userData: [],
    usernameData: [],
    userName: ""
  }



  loadData = async () => {
    const username = this.state.userName;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
  };



  inputUpdate = event => {
    this.setState({
      userName: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const NewUserData = await this.loadData();


    this.setState({
      userName: "",
      userData: [...this.state.userData, NewUserData],
    });

  };

  render() {
    const { userData } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label> GitHub Username
            <input
              value={this.state.userName}
              placeholder="Text Input"
              onChange={this.inputUpdate}
            />
          </label>
          <button type="submit">Submit</button>
        </form>

        <p>{this.state.userName}</p>
        <UserCardList userData={userData} />

      </div>
    );
  }
}

export default App;