import { createBrowserRouter } from "react-router-dom";
import Root_Page from "../Pages/Root_Page";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import Complain from "../Pages/Complain/Complain";
import NotFund from "../Pages/NotFund/NotFund";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root_Page />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/complain",
        element: <Complain />,
      },
      {
        path: "*",
        element: <NotFund />, // 404 page
        status: 404,
        exact: true, // exact match only
      },
    ],
  },
]);
