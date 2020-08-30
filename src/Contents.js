import React from "react";
import "./styles.css";

export default function Contents() {
  const [isi, setIsi] = React.useState("ini Dashboard");

  return (
    <div className="Contents">
      <ul>
        <li>
          <a onClick={() => setIsi(<p>ini Dashboard</p>)}>Dashboard</a>
        </li>
        <li>
          <a onClick={() => setIsi(<p>ini About</p>)}>About</a>
        </li>
        <li>
          <a onClick={() => setIsi(<p>ini Contact</p>)}>Contact</a>
        </li>
      </ul>
      <p>{isi}</p>
    </div>
  );
}
