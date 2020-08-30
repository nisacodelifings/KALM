import React from "react";
import "./styles.css";

export default function Menu() {
  const hash = "https://instagram.com";
  return (
    <div className="Menu">
      <ul>
        <li>
          <a href="{hash}">Dashboard</a>
        </li>
        <li>
          <a href="{hash}">About</a>
        </li>
        <li>
          <a href="{hash}">Contact</a>
        </li>
      </ul>
    </div>
  );
}