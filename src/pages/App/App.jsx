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
var nytKey = process.env.nytKey;
 


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
    console.log(nytKey);
    let user = userService.getUser(); 

    function searchMovies(title){
      fetch(`https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=62f8df6a646e4a2a8068b3a25eb9d1cb&query=${title}`,
      {
        method: 'get'
      })
      .then(response => response.json())
      .then(movies => movies)
      .catch((error) => {
        console.log(error)
        console.error(error)
      })
    }
    var movie = searchMovies("lego"); 

    Promise.all([user, movie]).then(data => {
      console.log(data);
      this.setState({user: data[0], movies: data[1]})
    })
  }

  Promi



  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <MainPage
                user={this.state.user}
                handleLogout={this.handleLogout}
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