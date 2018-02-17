import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import userService from '../../utils/userService';
import './SignupPage.css';


class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      email: '',
      password: '',
      passwordConf: '',
    }
  }
  
  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  handleChange = (field, e) => {
    this.updateMessage('');
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.signup(this.state)
      .then(() => {
        this.props.handleSignup();
        this.props.history.push('/');
      })
      // invalid user data
      .catch(err => this.props.updateMessage(err.message));
  }

  isFormValid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <SignupForm
          {...this.props}
          updateMessage={this.updateMessage}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isFormValid={this.isFormValid}
          handleSignUp={this.props.handleSignUp} 
        />
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default SignupPage;