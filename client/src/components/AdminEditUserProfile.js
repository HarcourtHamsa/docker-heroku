import React, {useState, useEffect} from 'react';
import '../contexts/context';
import {RiUser6Line} from 'react-icons/ri';
import AdminNavbar from './AdminNavbar';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import FloatingBtn from './layouts/FloatingBtn';

const AdminEditUserProfile = () => {
  const [currentUser, setCurrentUser] = useState ('');
  const [firstname, setFirstname] = useState ('');
  const [lastname, setLastname] = useState ('');
  const [email, setEmail] = useState ('');
  const [balance, setBalance] = useState ('');
  const [password, setPassword] = useState ('');
  const [newPassword, setNewPassword] = useState ('');
  const [role, setRole] = useState ('');
  const [redirectUser, setRedirectUser] = useState (false);

  const getArrayIndex = array => {
    return array.length - 1;
  };

  const getUserIdFromWindowLocation = url => {
    const userLocationDataArray = url.split ('/');
    const arrayIndex = getArrayIndex (userLocationDataArray);
    const userId = userLocationDataArray[arrayIndex];

    return userId;
  };

  const userId = getUserIdFromWindowLocation (window.location.href);

  const handleSubmit = e => {
    e.preventDefault ();
    axios
      .put (`/api/users/update/${userId}`, {
        firstname: firstname ? firstname : currentUser.firstname,
        lastname: lastname ? lastname : currentUser.lastname,
        emailaddress: email ? email : currentUser.emailaddress,
        password: newPassword ? newPassword : currentUser.password,
        balance: balance ? balance : currentUser.balance,
        role: role ? role : currentUser.role,
      })
      .then (result => console.log (result))
      .catch (err => console.log (err));

    setFirstname ('');
    setLastname ('');
    setEmail ('');
    setPassword ('');
    setBalance ('');
    setNewPassword ('');
    setRole ('');
    setRedirectUser (true);
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'firstname':
        setFirstname (e.target.value);
        break;
      case 'lastname':
        setLastname (e.target.value);
        break;
      case 'email':
        setEmail (e.target.value);
        break;
      case 'password':
        setPassword (e.target.value);
        break;
      case 'newPassword':
        setNewPassword (e.target.value);
        break;
      case 'balance':
        setBalance (e.target.value);
        break;
      case 'role':
        setRole (e.target.value);
        break;
      default:
        break;
    }
  };

  useEffect (() => {
    axios
      .get (`/api/users/${userId}`)
      .then (result => setCurrentUser (result.data))
      .then (console.log (currentUser))
      .catch (err => console.log (err));
    // eslint-disable-next-line
  }, []);
  return (
    <div className="">
      {redirectUser ? <Redirect to="/admin" /> : null}
      <AdminNavbar />
      <FloatingBtn />
      <div className="container">
        <div className="mt-5" />
        <form className="" onSubmit={handleSubmit}>
          <h5><RiUser6Line size="30" /> Edit User Profile</h5>
          <div className="form-row">
            <div className="col">
              <label className="small">firstname</label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                value={firstname}
                onChange={handleChange}
                placeholder={currentUser.firstname}
              />
            </div>
            <div className="col">
              {' '} <label className="small">lastname</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                value={lastname}
                onChange={handleChange}
                placeholder={currentUser.lastname}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label className="small">email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder={currentUser.emailaddress}
              />
            </div>

            <div className="col">
              <label className="small">account balance</label>
              <input
                type="number"
                className="form-control"
                name="balance"
                value={balance}
                onChange={handleChange}
                placeholder={currentUser.balance}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label className="small">role</label>
              <input
                type="type"
                className="form-control"
                name="role"
                value={role}
                onChange={handleChange}
                placeholder={currentUser.role}
              />
            </div>
            <div className="col">
              <label className="small">customer id</label>
              <input
                type="type"
                className="form-control"
                disabled
                placeholder={currentUser._id}
              />
            </div>
          </div>

          <p className="small font-weight-bold mt-3">Change Password</p>
          <div className="form-row">
            <div className="col">
              <label className="small">old password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder={currentUser.password}
              />

            </div>
            <div className="col">
              <label className="small">new password</label>
              <input
                type="password"
                className="form-control"
                name="newPassword"
                value={newPassword}
                onChange={handleChange}
                placeholder=""
              />
            </div>
          </div>

          <button className="btn btn-red text-white">
            <small>Save Changes</small>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminEditUserProfile;
