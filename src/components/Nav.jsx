import React from "react";
import { Link } from "react-router-dom";

// navigation links
export default function Nav() {
  return (
    <nav>
      <div className="content-wrapper-wide">
        <div className="nav-menu-wrapper">
          <div className="nav-menu-content">
            <div className="nav-link-wrapper">
              <ul>
                <li>
                  <Link to="/games">Games</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
