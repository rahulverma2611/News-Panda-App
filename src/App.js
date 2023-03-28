import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

const router = createBrowserRouter([
  {
    path: "/sports",
    element: (
      <div>
        <News key="sports" pageSize={15} country="in" category="sports" />
      </div>
    ),
  },
  {
    path: "/",
    element: (
      <div>
        <News key="general" pageSize={15} country="in" category="general" />
      </div>
    ),
  },
  {
    path: "/business",
    element: (
      <div>
        <News key="business" pageSize={15} country="in" category="business" />
      </div>
    ),
  },
  {
    path: "/general",
    element: (
      <div>
        <News key="general" pageSize={15} country="in" category="general" />
      </div>
    ),
  },
  {
    path: "/health",
    element: (
      <div>
        <News key="health" pageSize={15} country="in" category="health" />
      </div>
    ),
  },
  {
    path: "/science",
    element: (
      <div>
        <News key="science" pageSize={15} country="in" category="science" />
      </div>
    ),
  },
  {
    path: "/entertainment",
    element: (
      <div>
        <News key="entertainment" pageSize={15} country="in" category="entertainment" />
       </div>
    ),
  },
  {
    path: "/technology",
    element: (
      <div>
        <News key="technology" pageSize={15} country="in" category="technology" />
      </div>
    ),
  },
]);

const App = () => {
  // pageSize=15;
  return (
    <div>
      <Navbar />
      <LoadingBar color="#f11946" />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
