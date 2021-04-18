import React from "react";
import { Link } from "react-router-dom";
import { UserInfoTypes } from "../UserList";

const UserItem: React.FC<UserInfoTypes> = ({
  name,
  website,
  username,
  id,
}): JSX.Element => {
  const firstLetter = name.split("")[0];
  const linkToWebsite = `http://${website}`;
  return (
    <div className="user-item">
      <div className="name-username-website">
        <p className="first-letter">{firstLetter}</p>
        <p className="name">{name}</p>
        <p className="user-name">@{username}</p>
        <a href={linkToWebsite}>{linkToWebsite}</a>
      </div>
      <Link to={`users/${id}`} className="link-to-details">
        More Details
      </Link>
    </div>
  );
};

export default UserItem;
