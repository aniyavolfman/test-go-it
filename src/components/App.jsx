import { useState } from 'react';
import users from '../data/users.json';
import UsersList from './UsersList/UsersList';

export const App = () => {
  const [usersList, setUsersList] = useState(users);

  function handleOnClick(event) {
    console.log(event.target.textContent);
    console.dir(event.target);
    event.target.classList.toggle('activeBtn');
    console.log(event.target.classList);
    if (event.target.classList.contains('activeBtn')) {
      event.target.textContent = 'following';
    } else {
      event.target.textContent = 'follow';
    }
    console.log(event.target.classList.contains('activeBtn'));
  }

  return (
    <>
      <header></header>
      <main>
        <section>
          <h1>Users</h1>
          <UsersList users={usersList} onClick={handleOnClick} />
        </section>
      </main>
      <footer></footer>
    </>
  );
};
