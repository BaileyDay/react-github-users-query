import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    textInput: "",
    stuffITyped: []
  };

  handleChange = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const previousInput = this.state.textInput;

    this.setState({
      textInput: "",
      stuffITyped: [...this.state.stuffITyped, previousInput]
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Github Username
            <input
              type="text"
              value={this.state.textInput}
              placeholder="Enter Username"
              onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
