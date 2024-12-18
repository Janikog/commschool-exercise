import React, { useState } from "react";
import { data, Person, Gender } from "../../static/data";
import UsersListTableHead, {
  SortType,
} from "../UsersListTableHead/UsersListTableHead";
import styles from "./UsersList.module.css";
import UserListItem from "../UserItem/UserListItem";

const UserList = () => {
  // console.log("user render");
  const [users, setUsers] = useState<Person[]>(data);
  const [nameSort, setNameSort] = useState<SortType>();
  const [ageSort, setAgeSort] = useState<SortType>();

  const [newUser, setNewUser] = useState<{
    first_name: string;
    last_name: string;
    email: string;
    age: number;
    gender: Gender;
    job: string;
    country: string;
  }>({
    first_name: "",
    last_name: "",
    email: "",
    age: 0,
    gender: "",
    job: "",
    country: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addUser = () => {
    if (Object.values(newUser).some((value) => value === "")) {
      return;
    } else {
      const newUserObject: Person = {
        id: users.length + 1,
        ...newUser,
      };
      setUsers((previousUsers) => [newUserObject, ...previousUsers]);
      setNewUser({
        first_name: "",
        last_name: "",
        email: "",
        age: 0,
        gender: "",
        job: "",
        country: "",
      });
      console.log("render1");
    }
  };

  const removeUser = (id: number) => {
    // console.log("render2");
    setUsers((previousUsers) => {
      return previousUsers.filter((user) => user.id !== id);
    });
  };

  const sortByFirstName = () => {
    if (nameSort === "asc") {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => {
          if (userA.first_name > userB.first_name) return 1;
          if (userA.first_name < userB.first_name) return -1;
          return 0;
        });
        return newUsers;
      });
      setNameSort("desc");
    } else {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => {
          if (userA.first_name > userB.first_name) return -1;
          if (userA.first_name < userB.first_name) return 1;
          return 0;
        });
        return newUsers;
      });
      setNameSort("asc");
    }
  };

  const sortByAge = () => {
    if (ageSort === "asc") {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => {
          return userB.age - userA.age;
        });
        return newUsers;
      });
      setAgeSort("desc");
    } else {
      setUsers((previousUsers) => {
        const newUsers = [...previousUsers];
        newUsers.sort((userA, userB) => {
          return userA.age - userB.age;
        });
        return newUsers;
      });
      setAgeSort("asc");
    }
  };

  return (
    <div className={styles.table_container}>
      <table>
        <UsersListTableHead
          sortByFirstName={sortByFirstName}
          nameSort={nameSort}
          sortByAge={sortByAge}
          ageSort={ageSort}
        />
        <thead>
          <tr>
            <th></th>
            <th>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={newUser.first_name}
                onChange={handleInputChange}
              />
            </th>
            <th>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={newUser.last_name}
                onChange={handleInputChange}
              />
            </th>
            <th>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newUser.email}
                onChange={handleInputChange}
              />
            </th>

            <th>
              <input
                type="text"
                name="age"
                placeholder="Age"
                value={newUser.age || ""}
                onChange={handleInputChange}
              />
            </th>
            <th>
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={newUser.gender}
                onChange={handleInputChange}
              />
            </th>
            <th>
              <input
                type="text"
                name="job"
                placeholder="Job"
                value={newUser.job}
                onChange={handleInputChange}
              />
            </th>
            <th>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={newUser.country}
                onChange={handleInputChange}
              />
            </th>
            <th>
              <button onClick={addUser}>Add User</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <React.Fragment key={user.id}>
                <UserListItem user={user} removeUser={removeUser} />
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// export default memo(UserList, isEqual);
export default UserList;
