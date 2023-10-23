import React from "react";
import ReactDOM from "react-dom/client";
/* import App from "./App"; */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";
import ChileEnLaPQ from "./pages/ChileEnLaPQ/ChileEnLaPQ";
import Nosotros from "./pages/Nosotros/Nosotros";

const router = createBrowserRouter([
  { path: "/", element: <Home /> ,errorElement:<NoPage/>},
  { path: "/Chile",element: <ChileEnLaPQ/>},
  {path:"/Nosotros", element: <Nosotros/>}

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
