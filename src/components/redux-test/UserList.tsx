import React, { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const UserList: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  //   console.log(state);

  return <div>UserList</div>;
};

export default UserList;
