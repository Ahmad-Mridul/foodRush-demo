import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const auth = getAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const { signInUsingGoogle } = useAuth();
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long');
            return;
        }
        isLogin ? processLogin(email, password) : registerNewUser(email, password);

    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const toogleLogin = e => {
        setIsLogin(e.target.checked);
    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
                varifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    const varifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
            })
    }
    return (
        <div className=" container p-5">
            <div className="row">
                <div className=" col-sm-12 col-lg-6 col-md-6" >
                    <img width="400px" src="https://image.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg" alt="" />
                </div>
                <div className="bg-danger text-white  col-sm-12 col-lg-6 col-md-6 p-3">
                    <h2>Please {isLogin ? "Login" : "Register"}</h2>

                    <form onSubmit={handleRegistration} className="text-white">

                        {!isLogin && <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                onBlur={handleNameChange}
                                className="rounded m-2 p-2" type="text" name="name" placeholder="enter your name" />
                        </div>}



                        E-mail: <input
                            required
                            onBlur={handleEmailChange}
                            className="rounded m-2 p-2" type="email" name="email" placeholder="enter your email" /> <br />
                        Password:<input
                            required
                            onBlur={handlePasswordChange}
                            className="rounded m-2 p-2" type="password" name="password" placeholder="enter your password" /> <br />
                        <div className='text-danger'>
                            {error}
                        </div>
                        <div htmlFor="form-check">
                            <input
                                onChange={toogleLogin}
                                htmlFor="form-check-input" type="checkbox" id="gridCheck1" />
                            <label htmlFor="gridCheck1">
                                Already registered?
                            </label>
                        </div>
                        <button type="submit" className="btn btn-info text-white">
                            {isLogin ? "LogIn" : "Register"}
                        </button>

                    </form>
                    <div>------------------------------</div>
                    Google SignIn:<button onClick={signInUsingGoogle} className=" ms-2 btn btn-warning"><i class="fab fa-google"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Login;