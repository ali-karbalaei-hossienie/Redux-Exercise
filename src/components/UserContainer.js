import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

const UserContainer = () => {
  const userData = useSelector((state) => state.users);
  const { users, loading, error } = userData;
  const dispatch = useDispatch();
  console.log(userData);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderUser = () => {
    if (loading) {
      return <p>loading</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }
    if (users) {
      return (
        <div>
          <h2>USER LIST</h2>
          {users.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      );
    }
  };
  return (
    <div>
      <p>{renderUser()}</p>
    </div>
  );
};

export default UserContainer;
