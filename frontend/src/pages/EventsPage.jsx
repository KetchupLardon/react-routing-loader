import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

export const EventsPage = () => {
  const data = useLoaderData();
  const { events } = data;

  return <EventsList events={events} />;
};

export const eventsLoader = async () => {
  // Loader allow to fetch data just before rendering the component
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
};
