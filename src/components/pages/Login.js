import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './../../contexts/AuthContext';
import { useLocation } from 'react-router';
import '../../style/Login.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const { login } = useAuth();
    const { googleLogin } = useAuth();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            history.replace(from);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to login!");
        }
    }
    async function handleSignInGoogle() {
        try {
            setError("");
            setLoading(true);
            await googleLogin();
            history.replace(from);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to login!");
        }
    }



    return (
        <div className="login-form">
            <div className="center">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="text_field">
                        <input className="text-white" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="text_field">
                        <input className="text-white" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="pass">Forgot Password?</div>
                    {error && <p className="pass mb-1 text-danger">{error}</p>}
                    <input disabled={loading} type="submit" value="Login" />
                    <div className="signup_link">
                        Not a member? <Link to="/signUp">Signup</Link>

                    </div>
                </form>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary mb-3"
                        onClick={handleSignInGoogle}
                    >Login with Google</button>
                </div>
                <div>
                    {/* <h6>Login With </h6>
                <FontAwesomeIcon icon={faGoogle}
                        onClick={handleSignInGoogle}
                        className="me-3"
                        style={{ fontSize: '25px', color: '#3B86E8', cursor: 'pointer' }} /> */}
                </div>
            </div>
        </div>
    );
};

export default Login;