import React, { useState } from 'react';
import UsersList from './UsersList';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleValue = e => {
        setInputValue(e.target.value);
    }

    const updateList = e => {
        e.preventDefault();

        if(inputValue==='') {
            alert('Uzupełnij pole!');
            return;
        }

        let updatedArray = users.concat(inputValue);
        setUsers(updatedArray);
        setInputValue('');
    }

    const deleteUser = userIndex => {
        let filteredUsers = users.filter((user, index)=>{
            return userIndex !== index;
        });

        setUsers(filteredUsers); 
    }

    console.log(inputValue);
    return (
        <div>
            <form onSubmit={updateList}>
                <input type="text" value={inputValue} placeholder="wpisz nazwę usera" onChange={handleValue} />
                <button>Dodaj usera</button>
            </form>
            <UsersList usersArray={users} deleteUser={deleteUser} />
        </div>
    )
}

export default Users;