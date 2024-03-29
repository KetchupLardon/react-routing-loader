import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/Root";
import { ErrorPage } from "./pages/ErrorPage";
import { EditEventPage } from "./pages/EditEventPage";
import {
  NewEventPage,
  action as manipulateEventForm,
} from "./pages/NewEventPage";
import {
  EventDetailPage,
  eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetailPage";
import { EventsPage, eventsLoader } from "./pages/EventsPage";
import { HomePage } from "./pages/HomePage";
import { EventsRootLayout } from "./pages/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventForm,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventForm,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
