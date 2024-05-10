import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import DocumentPage from "./pages/DocumentPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/document/:id",
      element: <DocumentPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
