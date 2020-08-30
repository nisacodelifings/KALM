import React from "react";
import "./styles.css";

export default function Contents() {
  const [isi, setIsi] = React.useState("ini Dashboard");

  return (
    <div className="Contents">
      <ul>
        <li>
          <a onClick={() => setIsi("ini Dashboard")}>Dashboard</a>
        </li>
        <li>
          <a onClick={() => setIsi("ini About")}>About</a>
        </li>
        <li>
          <a onClick={() => setIsi("ini Contact")}>Contact</a>
        </li>
      </ul>
      <p>{isi}</p>
    </div>
  );
}
