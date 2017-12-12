import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import userService from '../../utils/userService';

 
class App extends Component {
  constructor(props){
    super();
    this.state = {
      user: null,
      movies: null 
    };
  }


  //User Callback Methods 
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }


  //Lifecycle Methods 
  componentDidMount(){
    let user = userService.getUser(); 
    this.setState({user});
    
    fetch('/api/movies',
    {
      method: 'get'
    })
      .then(movies => movies.json())
      .then(movies => this.setState({movies}))
    
  }







  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <MainPage
                user={this.state.user}
                handleLogout={this.handleLogout}
                movies={this.state.movies}
              />
            }/>
            <Route exact path='/signup' render={(props) => 
              <SignupPage 
                {...props}
                handleSignup={this.handleSignup}

              />
            }/>
            <Route exact path='/login' render={(props) => 
              <LoginPage 
                {...props}
                handleLogin={this.handleLogin}
              /> 
            }/>
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App; 