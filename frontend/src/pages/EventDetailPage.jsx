import { useRouteLoaderData, json, redirect } from "react-router-dom";
import { EventItem } from "../components/EventItem";

export const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event} />;
};

export const eventDetailLoader = async ({ _request, params }) => {
  // Loader allow to fetch data just before rendering the component
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
};

// Act as a middleware
export const action = async ({ request, params }) => {
  console.log("response");
  const { eventId } = params;
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method, // method set on useSubmit (EventItem here)
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
};
