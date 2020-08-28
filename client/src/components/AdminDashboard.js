import React, {useState, useEffect, useContext} from 'react';
import {AppContext} from '../contexts/context';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import UserList from './UserList';
import {RiUserSearchLine, RiAddLine} from 'react-icons/ri';
import FloatingBtn from './layouts/FloatingBtn';
import {Link} from 'react-router-dom';

const AdminDashboard = () => {
  const [users, setUsers] = useState ([]);
  // eslint-disable-next-line
  const [isAuthenticated, setIsAuthenticated] = useContext (AppContext);

  // ComponentDidMount
  useEffect (() => {
    const getUsers = async () => {
      try {
        const {data} = await axios.get ('http://localhost:5000/api/users');
        setUsers (data);
      } catch (error) {
        console.log (error);
      }
    };

    getUsers ();
  });

  // Event handler
  const handleDeleteUser = id => {
    axios
      .delete ('http://localhost:5000/api/users/delete/' + id)
      .then (setUsers (users.filter (user => user.id !== id)))
      .catch (err => console.log (err));
  };

  // Event handler
  const handleLogout = () => {
    setIsAuthenticated (false);
  };

  return (
    <div>
      <div className="">
        <AdminNavbar />
        <FloatingBtn />

        <div className="container mb-3">
          <Link to="/admin/user/add" className="btn btn-red text-white mb-3">
            <small><RiAddLine /> Create user</small>
          </Link>
        </div><hr />

        <div className="container">
          <div>
            <h5> <RiUserSearchLine size="30" /> User Database</h5>
            <table className="table table-hover table-sm">
              <thead>
                <tr className="">
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0
                  ? null
                  : users.map (user => (
                      <UserList
                        id={user._id}
                        key={user._id}
                        firstname={user.firstname}
                        lastname={user.lastname}
                        deleteUser={handleDeleteUser}
                      />
                    ))}
              </tbody>
            </table>
            <hr />
            <div className="mt-2">
              <button
                className="btn btn-red text-white mb-3"
                onClick={handleLogout}
              >
                <small>Logout</small>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
