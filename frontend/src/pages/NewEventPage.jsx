import { EventForm } from "../components/EventForm";
import { json, redirect } from "react-router-dom";

export const NewEventPage = () => {
  return <EventForm />;
};

// Act as a middleware
export const action = async ({ request, params }) => {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"), // Use the input's name as argument to retrieve data from that specific input
    date: data.get("date"),
    image: data.get("image"),
    description: data.get("description"),
  };
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    // 422 is validation form isssue
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/events");
};
