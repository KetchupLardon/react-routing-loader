import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/Root";
import { ErrorPage } from "./pages/ErrorPage";
import { EditEventPage } from "./pages/EditEventPage";
import { NewEventPage } from "./pages/NewEventPage";
import { EventDetailPage, eventDetailLoader } from "./pages/EventDetailPage";
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
          { path: "new", element: <NewEventPage /> },
          {
            path: ":eventId",
            element: <EventDetailPage />,
            loader: eventDetailLoader,
          },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
