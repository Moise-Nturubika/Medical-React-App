import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email.length < 1 || password.length < 1) {
            setShowerr('Email or password can\'t be empty');
        }
    }

    return (
        <div className="container">
        <div className="login-grid">
          <div className="login-text">
            <h2>Login</h2>
          </div>
          <div className="login-text">
            Are you a new member? <span><a href="../Sign_Up/Sign_Up.html" style={{color: "#2190FF"}}> Sign Up Here</a></span>
          </div>
          <br />
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                    <label for="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                    {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                </div>
              <div className="form-group">
                <label for="password" >Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                />
                {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
              </div>
              <div className="btn-group">
                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
              </div>
              <br />
              <div className="login-text">
                Forgot Password?
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Login;