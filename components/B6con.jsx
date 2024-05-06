import React from 'react';

class UserList extends React.Component {
  render() {
    const userList = this.props.users.map(user => (
      <div key={user.id}>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Address: {user.address}</p>
        <p>Email: {user.email}</p>
        <hr />
      </div>
    ));

    return (
      <div>
        {userList}
      </div>
    );
  }
}

export default UserList;
