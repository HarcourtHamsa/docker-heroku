import React, {useState} from 'react';
import {RiArrowRightLine} from 'react-icons/ri';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import FloatingBtn from './layouts/FloatingBtn';

export default function RegisterPage () {
  const [firstname, setFirstname] = useState ('');
  const [lastname, setLastname] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [profilePhoto, setProfilePhoto] = useState ('');
  const [signupIsSuccessful, setSignupIsSuccessful] = useState (null);

  const updateFirstname = e => {
    setFirstname (e.target.value);
  };

  const updateLastname = e => {
    setLastname (e.target.value);
  };

  const updateEmail = e => {
    setEmail (e.target.value);
  };

  const updatePassword = e => {
    setPassword (e.target.value);
  };

  const updatePhoto = e => {
    setProfilePhoto (e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault ();
    const formData = new FormData (document.getElementById ('signup'));
    axios
      .post ('/api/users/add', formData)
      .then (() => setSignupIsSuccessful (true))
      .catch (() => setSignupIsSuccessful (false));

    setFirstname ('');
    setLastname ('');
    setEmail ('');
    setPassword ('');
    setProfilePhoto ('');
  };
  return (
    <div>
      <AdminNavbar />
      <FloatingBtn />

      <div className="container mt-4">
        <div className="row full-height bg-white">
          <div className="col-xl-6 p-5 special-bg">
            <div className="">
              {!signupIsSuccessful
                ? null
                : <div
                    className="alert alert-danger alert-dismissible fade show mb-0"
                    role="alert"
                  >
                    Error!
                  </div>}
              <h5>Create A New Account</h5>
              <form
                className="mt-3"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                id="signup"
              >
                <div className="form-row">
                  <div className="col-xl-6">
                    <label>Profile photo</label><br />
                    <input
                      type="file"
                      name="profilePhoto"
                      className="form-control"
                      value={profilePhoto}
                      onChange={updatePhoto}
                      required
                      autoComplete="true"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-xl-6">
                    <label>First name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstname"
                      value={firstname}
                      onChange={updateFirstname}
                      required
                      autoComplete="true"
                    />
                  </div>
                  <div className="col-xl-6">
                    <label>Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastname"
                      value={lastname}
                      onChange={updateLastname}
                      required
                      autoComplete="true"
                    />
                  </div>

                </div>

                <label>Email </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={updateEmail}
                  required
                  autoComplete="true"
                />

                <div className="form-row">
                  <div className="col-xl-6">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={updatePassword}
                      required
                      autoComplete="true"
                    />
                  </div>
                  <div className="col-xl-6">
                    <label>Confirm password</label>
                    <input
                      type="password"
                      className="form-control"
                      required
                      autoComplete="true"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="shadow small btn btn-red mt-3 small text-white mb-3"
                >
                  <small>Create Account <RiArrowRightLine /></small>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
