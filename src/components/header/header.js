import React from 'react';
import './Header.css'
export default function Header(props) {
  return (
    <div className="Header">
      <h1>{props.title.length >=3 ? `Showing news for ${props.title}`: 'Header'}</h1>
    </div>
  );
}