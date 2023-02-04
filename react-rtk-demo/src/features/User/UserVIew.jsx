import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

function UserVIew() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <h1>Loading...</h1>}
      {!user.loading && user.error ? <p>{`Error: ${user.error}`}</p> : null}
      {!user.loading && user.data.length ? (
        <div>
          <ul>
            {user.data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default UserVIew;
