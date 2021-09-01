import React, { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <LoginComponent />
      </div>
    );
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "priyavrat",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    //this.handleUserNameChange = this.handleUserNameChange.bind(this);
    //this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    //console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // handleUserNameChange(event) {
  //   console.log(event.target.value);
  //   this.setState({
  //     username: event.target.value,
  //   });
  // }

  // handlePasswordChange(event) {
  //   console.log(event.target.value);
  //   this.setState({
  //     password: event.target.value,
  //   });
  // }

  loginClicked() {
    //priyavrat/password

    if (
      this.state.username === "priyavrat" &&
      this.state.password === "password"
    ) {
      console.log("Successful");
      this.setState({ showSuccessMessage: true });
      this.setState({ hasLoginFailed: false });
    } else {
      console.log("Failed");
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  }

  render() {
    return (
      <div>
        {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Login Successful</div>}
        {/*<ShowLoginSuccessMessage
          showSuccessMessage={this.state.showSuccessMessage}
        />*/}
        UserName :{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password :{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

// function ShowInvalidCredentials(props) {
//   if (props.hasLoginFailed) {
//     return <div>Invalid Credentials</div>;
//   }
//   return null;
// }

// function ShowLoginSuccessMessage(props) {
//   if (props.showSuccessMessage) {
//     return <div>Login Successful</div>;
//   }
//   return null;
// }

export default TodoApp;
