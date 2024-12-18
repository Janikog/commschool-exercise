import { Person } from "../../static/data";
import styles from "./UserListItem.module.css";
import { memo } from "react";

type UserListItemProps = {
  user: Person;
  removeUser: (id: number) => void;
};

const UserListItem = (props: UserListItemProps) => {

  const { user, removeUser } = props;
  // console.log("Userlist item", user.id);
  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.job}</td>
      <td>{user.country}</td>
      <td className={styles.remove_user}>
        <button onClick={() => removeUser(user.id)}>remove user</button>
      </td>
    </tr>
  );
};

const isEqual = (prevProps: any, nextProps: any) => {
  return prevProps.value === nextProps.value;
};
export default memo (UserListItem, isEqual);
