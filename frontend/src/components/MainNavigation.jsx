import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const NAVIGATION_SETTINGS = [
  { path: "/", text: "Home" },
  { path: "/events", text: "Events" },
];

export const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {NAVIGATION_SETTINGS.map(({ path, text }, index) => (
            <li>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end={index === 0}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
