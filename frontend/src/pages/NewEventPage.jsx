import { EventForm } from "../components/EventForm";
import { json, redirect } from "react-router-dom";

export const NewEventPage = () => {
  return <EventForm method="post" />;
};

// Act as a middleware
export const action = async ({ request, params }) => {
  const { method } = request;
  const data = await request.formData();

  const eventData = {
    title: data.get("title"), // Use the input's name as argument to retrieve data from that specific input
    date: data.get("date"),
    image: data.get("image"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    const { eventId } = params;
    url = `${url}/${eventId}`;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  // 422 is validation form isssue
  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/events");
};
