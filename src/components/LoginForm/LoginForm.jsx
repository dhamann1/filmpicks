import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';


const LoginForm = (props) => {
  return (
    <div>
      <header className="header-footer">Log In</header>
      <form className="form-horizontal" onSubmit={props.handleSubmit} >
        <div className="form-group">
          <div className="col-sm-12">
            <input type="email" className="form-control" placeholder="Email" onChange={(e) => props.handleChange('email', e)} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="password" className="form-control" placeholder="Password" onChange={(e) => props.handleChange('pw', e)} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;<Link to='/'>Cancel </Link>
          </div>
        </div>
      </form>
    </div>
  )
}


export default LoginForm;