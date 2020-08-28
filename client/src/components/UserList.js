import React from 'react';
import {Link} from 'react-router-dom';
// eslint-disable-next-line
import {MdCreate, MdDelete} from 'react-icons/md';

const UserList = props => {
  return (
    <tr id={props.id} key={props.id}>
      <td className="small">{props.firstname}</td>
      <td className="small">{props.lastname}</td>
      <td>
        <button
          to="#"
          className="btn btn-red text-white"
          onClick={() => props.deleteUser (props.id)}
        >
          <MdDelete /> <small>Delete</small>
        </button>
        <Link className="btn btn-blue" to={`/admin/profile/${props.id}`}>
          <MdCreate /><small>Edit</small>
        </Link>
      </td>
    </tr>
  );
};

export default UserList;
