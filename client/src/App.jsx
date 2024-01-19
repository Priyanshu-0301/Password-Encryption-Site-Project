import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

// import React router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <>
      {/* This the HOME page. */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
