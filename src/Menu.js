import React from "react";
import "./styles.css";

export default function Menu() {
  const [hash, setHash] = React.useState("https://instagram.com");

  return (
    <span className="Menu">
      <ul>
        <li>
          <a href={hash}>Dashboard</a>
        </li>
        <li>
          <a href={hash}>About</a>
        </li>
        <li>
          <a href={hash}>Contact</a>
        </li>
      </ul>
    </span>
  );
}
