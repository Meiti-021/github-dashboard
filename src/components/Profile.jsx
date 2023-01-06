import React from "react";

import { FcOrganization, FcGlobe } from "react-icons/fc";
import { FaLink } from "react-icons/fa";
import InfoData from "../database/InfoData";
import Info from "./Info";
import { useGlobalContext } from "../contexts/Contexts";
const Profile = () => {
  const { userData } = useGlobalContext();
  return (
    <div className="profile">
      <figure className="profile__figure">
        <img src={userData.avatar_url} alt="" className="profile__image" />
        <div className="moving-border"></div>
      </figure>
      <h2 className="profile__name">{userData.name}</h2>
      <p className="profile__bio">{userData.bio}</p>

      <div className="profile__additional-info">
        {InfoData.map((item) => {
          if (userData[item.text] !== null) {
            return (
              <Info
                {...item}
                text={userData[item.text]}
                key={`${Math.random() * 55555555555555555555555}`}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Profile;
