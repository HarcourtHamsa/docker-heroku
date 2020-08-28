import React, {useState, useEffect} from 'react';
import {RiUser6Line} from 'react-icons/ri';

import axios from 'axios';

export default function AdminNavbar () {
  const [users, setUsers] = useState ([]);

  // ComponentDidMount
  useEffect (() => {
    axios
      .get ('http://localhost:5000/api/users')
      .then (result => setUsers (result.data))
      .catch (err => console.log (err));
  }, []);

  return (
    <div>
      <div className="text-white p-3 mb-3" style={{backgroundColor: '#a11d15'}}>

        <div className="">
          <p><RiUser6Line size="20" />Total users: {users.length}</p>
        </div>
      </div>
    </div>
  );
}
