import React, { FC } from "react";
import { IUser } from "../types/types";

interface IUserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<IUserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} className="user">
      {user.id}. {user.name} live in city - {user.address.city} on{" "}
      {user.address.street} street
    </div>
  );
};

export default UserItem;
