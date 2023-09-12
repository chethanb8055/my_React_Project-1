import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
// import Product from "./component/Product";
import Product from "./Page/Product";
import About from "./component/about";
import Error from "./component/Error";
import ProductInfo from "./component/ProductInfo";
// import Details from "./component/Details";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./component/Shimmer";

import userInfo from "./utiles/UserContext";
import UserContext from "./utiles/UserContext";
import { Provider } from "react-redux";
import store from "./utiles/store";
import Cart from "./component/Cart";
import { ToastContainer } from "react-toastify";
// import Contact from "./component/Contact";
const root = ReactDOM.createRoot(document.getElementById("root"));

const Contact = lazy(() => import("./component/Contact"));

function App() {
  const [userInfo, setUserInfo] = useState({
    name: "chethan",
    id: 12,
  });
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{ userInfo: userInfo, setUserInfo: setUserInfo }}
        >
          <Header />
          <Outlet />
          <ToastContainer/>
        </UserContext.Provider>
      </Provider>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Product />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/productInfo/:id",
        element: <ProductInfo />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        element: <Cart />,
        path: "/cart",
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
