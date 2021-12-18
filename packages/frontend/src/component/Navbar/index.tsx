import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav>
        <nav>
          <ul>
            <li>
              <Link to="/">Hello</Link>
            </li>
            <li>
              <Link to="/subscriptions">Subscriptions</Link>
            </li>
            <li>
              <Link to="/mutations">Mutations</Link>
            </li>
            <li>
              <Link to="/queries">Queries</Link>
            </li>
            <li>
              <Link to="/laziesqueries">LaziesQueries</Link>
            </li>
          </ul>
        </nav>
      </nav>
    </>
  );
}
