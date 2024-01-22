import React, { useState } from 'react';
import './Sign_Up.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.length < 1) {
            setShowerr("Name can't be empty");
        } else if(email.length < 1) {
            setShowerr("Email can't be empty");
        } else if(phone.length < 10) {
            setShowerr("Phone number must have at least 10 digits");
        } else if(password.length < 1) {
            setShowerr("Password can't be empty");
        }
    }

    return (
        <div className="container" style={{marginTop:'5%'}}>
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text1" style={{textAlign: 'left'}}>
                    Already a member? <span><a href="../Login/Login.html" style={{color: "#2190FF"}}> Login</a></span>
                </div>
                <div className="signup-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                        </div>
                        <div className="form-group">
                            <label for="phone">Phone</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;