import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/types";
import List from "../components/List";
import UserItem from "../components/UserItem";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            onClick={(user) => navigate("/users/" + user.id)}
            user={user}
            key={user.id}
          />
        )}
      />
    </>
  );
};

export default UserPage;
