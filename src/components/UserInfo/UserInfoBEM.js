import React from 'react';
import "./UserInfoBEM.css";

export const UserInfoBEM = () => (
  <div className="UserInfo">
    <img src="https://react.semantic-ui.com/images/avatar/small/matthew.png" alt="Hello World" />
    <div className="UserInfo__Content">
      <div>Kamal Bennani</div>
      <div>JS Developer</div>
    </div>
  </div>
);
