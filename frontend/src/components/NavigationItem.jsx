import { NavLink } from "react-router-dom";

export const NavigationItem = ({ path, text, isEnd, classes }) => (
  <li>
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? classes.active : undefined)}
      end={isEnd}
    >
      {text}
    </NavLink>
  </li>
);
