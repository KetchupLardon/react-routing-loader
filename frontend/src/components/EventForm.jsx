import { useNavigate } from "react-router-dom";

import classes from "./EventForm.module.css";
import { capitalizeFirstLetter } from "../utils/strings";

const FORM_INPUT = [
  { type: "text", name: "title" },
  { type: "url", name: "image" },
  { type: "date", name: "date" },
];

export const EventForm = ({ _method, event }) => {
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate("..");
  };

  return (
    <form className={classes.form}>
      {FORM_INPUT.map(({ type, name }) => (
        <p>
          <label htmlFor={name}>{capitalizeFirstLetter(name)}</label>
          <input
            id={name}
            type={type}
            name={name}
            required
            defaultValue={event ? event[name] : ""}
          />
        </p>
      ))}
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
};
