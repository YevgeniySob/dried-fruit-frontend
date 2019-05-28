import React from 'react';
import User from './User'

const UserList = (props) => {

  const displayUsers = () => {
    return props.users.map((user, idx) => {
      return <User key={idx} user={user}/>
    })
  };
  return (
    <div>
      {displayUsers()}
    </div>
  )
};

export default UserList;
