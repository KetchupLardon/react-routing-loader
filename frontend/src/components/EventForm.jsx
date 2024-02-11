import { useNavigate, useNavigation } from "react-router-dom";
import { Form } from "react-router-dom";

import classes from "./EventForm.module.css";
import { capitalizeFirstLetter } from "../utils/strings";

const FORM_INPUT = [
  { type: "text", name: "title" },
  { type: "url", name: "image" },
  { type: "date", name: "date" },
];

export const EventForm = ({ _method, event }) => {
  const navigate = useNavigate();
  const navigation = useNavigation(); // Get transition state from moving to another url through link or through form's submitting

  const isSubmitting = navigation.state === "submitting";

  const cancelHandler = () => {
    navigate(".."); // Go back to last page
  };

  return (
    // The method POST from this form will not directly send it to the backend but to the action that was created at the page level
    <Form method="post" className={classes.form}>
      {FORM_INPUT.map(({ type, name }, index) => (
        <p key={`event-input-${index}`}>
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
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
};
