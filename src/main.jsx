import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Auth from "./screens/Auth.jsx";
import NameContextProvider from "./context/NameContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <NameContextProvider>
        <RouterProvider router={router} />
      </NameContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
