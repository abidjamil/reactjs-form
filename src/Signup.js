import logo from './logo.svg';
import './App.css';
import React from 'react'
import MyContext from './context/context';
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    MyContext.name = this.state.name;
    MyContext.email = this.state.email;
    MyContext.password = this.state.password;
    event.preventDefault();
  }

  render() {
    return (
      <MyContext.Provider value={{ 'email': this.state.email, 'password': this.state.password }}>
        <form onSubmit={this.handleSubmit} style={{ flexDirection: 'column' }}>
          <p>
            Name:
          </p>
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          <p>
            Email:
          </p>
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
          <p>
            Password:
          </p>
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <p></p>
          <input type="submit" value="Submit" />
        </form>
      </MyContext.Provider>
    );
  }
}
export default SignupForm;
