import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  <header>
    <div>
      <nav>
        <NavLink to="/" exact>
          Jeff
        </NavLink>
        <NavLink to="/what-we-do">What we do</NavLink>
        <NavLink to="/upcoming">Upcoming</NavLink>
        <NavLink to="/past-events">Past Events</NavLink>
        <NavLink to="/partners">Partners</NavLink>
        <NavLink to="/content">Content Hub</NavLink>
      </nav>
    </div>
  </header>;
}
