import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

//using Fragment is reasonable cuz using just<div> make a complex html tree
//why we use portal? lower level where can't compose the coverring layer then we can't control ensure display
//deeply nested app.js is caused to deeply nested errormodal 
//react DOM(is composed to node such a <header>...) is kind of the adapter for React to the browser
//