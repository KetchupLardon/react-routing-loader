import { NavigationItem } from "./NavigationItem";
import classes from "./EventsNavigation.module.css";

const NAVIGATION_SETTINGS = [
  { path: "/events", text: "All Events" },
  { path: "/events/new", text: "New Event" },
];

export const EventsNavigation = () => {
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
