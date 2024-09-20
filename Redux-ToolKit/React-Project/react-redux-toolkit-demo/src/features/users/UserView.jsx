import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

export const Userview = () => {
  const usersObject = useSelector((state) => state.users);
  console.log(usersObject);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    // console.log("In the userView", usersObject);

    <div>
      <h2>List of users</h2>
      {usersObject.loading && <div>Loading </div>}
      {!usersObject.loading && usersObject.error ? (
        <div>Error : {usersObject.error}</div>
      ) : null}
      {!usersObject.loading && usersObject.users.length ? (
        <ul>
          {/* {console.log(usersObject.users)} */}
          {usersObject.users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
