import React from 'react';
import { Link } from "react-router-dom"
import Router from "./Router";
import './App.css';

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          padding: "15px",
        }}
      >
        <nav>
          <ul>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Router />
    </div>
  );
}

export default App;
