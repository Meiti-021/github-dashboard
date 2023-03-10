import React from "react";

const Follower = ({ avatar_url, login, url }) => {
  return (
    <div className="ih-item circle effect4 left_to_right">
      <a href={url}>
        <div className="img">
          <img src={avatar_url} alt="img" />
        </div>
        <div className="info" style={{}}>
          <h3
            style={{
              padding: "0",
              margin: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {login}
          </h3>
        </div>
      </a>
    </div>
  );
};

export default Follower;
