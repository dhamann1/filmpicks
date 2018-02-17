import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = (props) => {
  let button = <button type='submit' className='btn' disabled>Create My Account</button>;
  if (props.isFormValid()) button = <button type='submit' className='btn'>Create My Account</button>;

  return (
    <div>
      <header className="header-footer">Sign Up</header>
      <form className="form-horizontal" onSubmit={props.handleSubmit} >
        <div className="form-group">
          <div className="col-sm-12">
            <input type="text" className="form-control" placeholder="Name" onChange={(e) => props.handleChange('name', e)} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="email" className="form-control" placeholder="Email" onChange={(e) => props.handleChange('email', e)} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="password" className="form-control" placeholder="Password" onChange={(e) => props.handleChange('password', e)} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e) => props.handleChange('passwordConf', e)} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button className="btn btn-default" disabled={props.isFormValid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;