import { useParams } from "react-router-dom";

export const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <p>{params.eventId}</p>
    </>
  );
};