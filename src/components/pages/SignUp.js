import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useAuth } from './../../contexts/AuthContext';

const SignUp = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const { signup } = useAuth();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    async function handleSubmit(e) {
        e.preventDefault();
        //do validation
        if (password !== confirmPassword) {
            return setError("passwords don't match!")
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            history.replace(from);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to create an account!");
        }
    }

    return (
        <div className="login-form">
            <div className="center">
                <h1>SignUp</h1>
                <form onSubmit={handleSubmit}>
                    <div className="text_field">
                        <input className="text-white" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <span></span>
                        <label>Full Name</label>
                    </div>
                    <div className="text_field">
                        <input className="text-white" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span></span>
                        <label>Email Address</label>
                    </div>
                    <div className="text_field">
                        <input className="text-white" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="text_field">
                        <input className="text-white" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        <span></span>
                        <label>Confirm Password</label>

                    </div>
                    {error && <p className="pass mb-1 text-danger">{error}</p>}
                    <input disabled={loading} type="submit" value="SignUp" />
                    <div className="signup_link">
                        Have a Account? <Link to="Login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;