import React, { Component } from "react";
import "./TodoApp.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/welcome/:name" component={WelcomeComponent} />
              <Route path="/todos" component={ListTodosComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>

        {/*<LoginComponent />*/}
      </div>
    );
  }
}

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        Header <hr />
      </div>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <div>
        <hr /> Footer
      </div>
    );
  }
}
class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        Welcome {this.props.match.params.name} . You can manage your todos{" "}
        <Link to="/todos">here</Link>
      </div>
    );
  }
}
class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Learn React",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: "Learn Java",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: "Learn to Self Control",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 4,
          description: "Learn full-stack Development",
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
              <th>Is Completed?</th>
              <th>Target Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function ErrorComponent() {
  return (
    <div>
      An Error occurred as the page you are trying to reach doesn't exists.{" "}
    </div>
  );
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
      this.props.history.push(`/welcome/${this.state.username}`);
      /*this.setState({ showSuccessMessage: true });
      this.setState({ hasLoginFailed: false }); */
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
