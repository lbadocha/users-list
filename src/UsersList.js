import React from 'react';

import './UsersList.css';

const UsersList = props => {

    const listItems = props.usersArray.map((user, index) =>{
        return <li key={index} className="user-item" onClick={()=>props.deleteUser(index)}>{user}</li>;
    });

    return (
        <ul className="users-list">
            {listItems}
        </ul>
    );
}

export default UsersList;