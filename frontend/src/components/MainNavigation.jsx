import { NavigationItem } from "./NavigationItem";
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
            <NavigationItem
              path={path}
              isEnd={index === 0}
              text={text}
              classes={classes}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};
