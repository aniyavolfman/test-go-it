import { useEffect, useState } from 'react';
import users from '../data/users.json';
import UsersList from './UsersList/UsersList';

export const App = () => {
  const [usersList, setUsersList] = useState(
    JSON.parse(localStorage.getItem('users')) ?? users
  );
  const [textContentBtn, setTextContentBtn] = useState(
    JSON.parse(localStorage.getItem('textContentBtn')) ??
      usersList.map(el => {
        return { id: el.id, textContent: 'follow' };
      })
  );

  useEffect(() => {
    const stringifiedBtn = JSON.stringify(textContentBtn);
    const stringifiedUsers = JSON.stringify(usersList);
    localStorage.setItem('textContentBtn', stringifiedBtn);
    localStorage.setItem('users', stringifiedUsers);
  }, [textContentBtn, usersList]);

  function handleOnClick(event) {
    const id = event.target.id;
    const textContent = event.target.textContent;

    if (textContent === 'follow') {
      setTextContentBtn(prevState => {
        const arr = [
          ...prevState.filter(el => Number(el.id) !== Number(event.target.id)),
        ];
        arr.push({ id, textContent: 'following' });

        return arr;
      });

      setUsersList(prevState => {
        let users = [...prevState];
        let index = prevState.findIndex(
          el => Number(el.id) === Number(event.target.id)
        );

        users[index].followers += 1;
        return users;
      });
    } else {
      setTextContentBtn(prevState => {
        const arr = [
          ...prevState.filter(el => Number(el.id) !== Number(event.target.id)),
        ];
        arr.push({ id, textContent: 'follow' });

        return arr;
      });
      setUsersList(prevState => {
        let users = [...prevState];
        let index = prevState.findIndex(
          el => Number(el.id) === Number(event.target.id)
        );

        users[index].followers -= 1;
        return users;
      });
    }
  }

  return (
    <>
      <header></header>
      <main>
        <section>
          <h1>Users</h1>
          <UsersList
            users={usersList}
            onClick={handleOnClick}
            textContentBtn={textContentBtn}
          />
        </section>
      </main>
      <footer></footer>
    </>
  );
};
