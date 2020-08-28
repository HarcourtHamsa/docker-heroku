import React, {useState, useContext} from 'react';
import {ClipLoader} from 'react-spinners';
import {AppContext} from '../../contexts/context';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import './login.css';
import FloatingBtn from '../layouts/FloatingBtn';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';

const Login = () => {
  const [_id, setID] = useState ('');
  const [password, setPassword] = useState ('');
  const [isLoading, setIsLoading] = useState (false);
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState (true);
  const [isAdmin, setIsAdmin] = useState (false);

  const [
    isAuthenticated,
    setIsAuthenticated,
    // eslint-disable-next-line
    userDetails,
    setUserDetails,
  ] = useContext (AppContext);

  const updateID = e => {
    setID (e.target.value);
  };

  const updatePassword = e => {
    setPassword (e.target.value);
  };

  async function loginUser (data) {
    const res = await axios.post ('http://localhost:5000/api/users/login', data);
    return res.data;
  }

  const showLoadingIndicator = () => {
    setIsLoading (true);
  };

  const handleSubmit = e => {
    e.preventDefault ();
    showLoadingIndicator ();
    console.log (_id, password);

    const userData = {
      _id,
      password,
    };

    loginUser (userData)
      .then (user => {
        if (user.role === 'admin') {
          setIsAdmin (true);
        }
        setIsLoggedIn (true);
        setIsAuthenticated (true);
        setUserDetails (user);
      })
      .catch (err => console.log(err));

    setID ('');
    setPassword ('');
  };

  if (isAuthenticated) {
    if (isAdmin) {
      return <Redirect to="/admin" />;
    }

    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <NavBar />
      <FloatingBtn />
      <div className="container login mt-5 mb-5 bg-white">
        <h5 className="mb-5 text-red">Log into the Internet Bank</h5>
        <form className="" onSubmit={handleSubmit}>
          <label className="text-blue">Customer number</label><br />
          <small className="text-muted">
            Your unique number for online banking.< br /> It’s like a username for when you log in
          </small>
          <br />
          <input
            type="text"
            className="mb-3"
            name="_id"
            value={_id}
            onChange={updateID}
            autoComplete="true"
            required
          />
          {' '}
          <br />

          <label className="text-blue">Password</label><br />
          <input
            type="password"
            className="mb-3"
            name="password"
            value={password}
            onChange={updatePassword}
            autoComplete="true"
            required
          />
          <br />

          {/* // Show loading indictor on submit */}
          {isLoading
            ? <button
                type="submit"
                className="btn btn-red mt-3 text-white"
                id="login-btn"
              >
                <ClipLoader size="20px" color="white" />
              </button>
            : <button
                type="submit"
                className="btn btn-red mt-3 text-white"
                id="login-btn"
              >
                Log in
              </button>}

          <br />
          <br />
          <small className="text-muted">Fogort password?</small><br />
          <small className="text-muted">
            Not registered ?
            {' '}
            <Link to="/register" className="text-blue">Create an account</Link>
          </small>
        </form>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
