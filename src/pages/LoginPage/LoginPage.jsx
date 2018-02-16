import React, {Component} from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import userService from '../../utils/userService';
import './LoginPage.css';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.login(this.state)
      .then(() => {
        this.props.handleLogin();
        this.props.history.push('/');
      })
      .catch(err => alert('Invalid Credentials!'));
  }

  render () {
    return (
      <div className='LoginPage'>
        <LoginForm 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        /> 
      </div> 
    )
  }
}

  export default LoginPage;