import React, { useState, useEffect } from "react";
import UserItem from "./UserItem/UserItem";
import Loading from "../Loading/Loading";

export type UserInfoTypes = {
  name: string;
  website: string;
  id: number;
  username: string;
};

const UserList: React.FC = (): JSX.Element => {
  const [users, setUsers] = useState<UserInfoTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define function to fetch all users
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    // Fetch data of users
    fetchData();
  }, [loading, users]);

  return (
    <div className="user-list">
      {/* Loading */}
      {loading && <Loading />}
      {/* Fetch data successfully */}
      {users.length > 0 &&
        !loading &&
        users.map((user: UserInfoTypes, id: number) => {
          return (
            <UserItem
              name={user.name}
              id={user.id}
              username={user.username}
              website={user.website}
              key={id}
            />
          );
        })}
    </div>
  );
};

export default UserList;
